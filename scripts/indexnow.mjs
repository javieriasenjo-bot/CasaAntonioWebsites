import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const origin = 'https://casaantonio.jp';
const key = 'e5343769db62565dac8a830bd470b06a';

export function selectUrls(xml, requested) {
  const known = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  if (!known.length) throw new Error('Live sitemap contains no URLs.');
  const urls = [...new Set(requested)];
  if (!urls.length || urls.length > 10000) throw new Error('Select 1–10,000 changed URLs.');
  for (const value of urls) {
    const url = new URL(value);
    if (url.origin !== origin || url.search || url.hash || !known.includes(value)) {
      throw new Error(`Not a current canonical sitemap URL: ${value}`);
    }
  }
  return urls;
}

async function get(url) {
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30000) });
  if (response.status !== 200) throw new Error(`${url}: HTTP ${response.status}`);
  if (/noindex/i.test(response.headers.get('x-robots-tag') || '')) throw new Error(`${url}: noindex header`);
  return response.text();
}

async function main() {
  const args = process.argv.slice(2);
  const submit = args.includes('--submit');
  const fileAt = args.indexOf('--urls');
  const receiptAt = args.indexOf('--receipt');
  if (fileAt < 0 || !args[fileAt + 1]) {
    throw new Error('Usage: npm run indexnow -- --urls changed-urls.txt [--submit --receipt receipt.json]');
  }
  if (submit && (receiptAt < 0 || !args[receiptAt + 1])) throw new Error('Submission requires --receipt filename.');
  const requested = (await readFile(args[fileAt + 1], 'utf8')).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  const urlList = selectUrls(await get(`${origin}/sitemap.xml`), requested);
  const keyLocation = `${origin}/${key}.txt`;
  if ((await get(keyLocation)).trim() !== key) throw new Error('Live IndexNow key does not match.');
  // Require the selected pages to be deployed, indexable, and self-canonical first.
  for (const url of urlList) {
    const html = await get(url);
    const tags = html.match(/<link\b[^>]*>/gi) || [];
    const canonical = tags.find(t => /rel=["']canonical["']/i.test(t));
    if (!canonical?.includes(`href="${url}"`) && !canonical?.includes(`href='${url}'`)) {
      throw new Error(`Live canonical does not match: ${url}`);
    }
    if ((html.match(/<meta\b[^>]*>/gi) || []).some(tag => /name=["'](?:robots|bingbot|googlebot)["']/i.test(tag) && /content=["'][^"']*noindex/i.test(tag))) {
      throw new Error(`Live page is noindex: ${url}`);
    }
  }
  if (!submit) {
    console.log(`Dry run passed: ${urlList.length} live URLs. No submission sent.`);
    return;
  }
  const endpoint = 'https://api.indexnow.org/indexnow';
  const response = await fetch(endpoint, {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: 'casaantonio.jp', key, keyLocation, urlList }),
    signal: AbortSignal.timeout(30000),
  });
  const receipt = {
    submittedAt: new Date().toISOString(), endpoint, status: response.status,
    meaning: response.status === 200 ? 'Received; indexing is not guaranteed.' : response.status === 202 ? 'Received; key validation pending.' : 'Submission failed.',
    response: await response.text(), urlList,
  };
  await writeFile(args[receiptAt + 1], JSON.stringify(receipt, null, 2) + '\n');
  console.log(JSON.stringify({ status: receipt.status, meaning: receipt.meaning, urls: urlList.length }));
  if (![200, 202].includes(response.status)) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}

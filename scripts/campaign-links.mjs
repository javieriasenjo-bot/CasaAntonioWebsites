import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const origin = 'https://casaantonio.jp';
const sources = ['instagram', 'tiktok', 'rednote', 'youtube'];
const languages = { en: '', ja: '/ja', zh: '/zh-cn', ko: '/ko' };
const pages = { home: '', a: 'casa-antonio-a', b: 'casa-antonio-b', 'long-stay': 'long-stay' };

export function campaignLinks({ campaign, content, source, lang, page }, sitemap) {
  // Keep campaign naming consistent. Do not guess aliases or tag internal links.
  for (const value of [campaign, content]) {
    if (!value || !/^[a-z0-9][a-z0-9_-]{0,79}$/.test(value)) throw new Error('Campaign and content must be lowercase names, at most 80 characters.');
  }
  if (source && !sources.includes(source)) throw new Error('Use instagram, tiktok, rednote or youtube; no aliases.');
  if (lang && !Object.hasOwn(languages, lang)) throw new Error('Use en, ja, zh or ko.');
  if (page && !Object.hasOwn(pages, page)) throw new Error('Use home, a, b or long-stay.');
  const canonical = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
  const links = [];
  for (const platform of source ? [source] : sources) {
    for (const language of lang ? [lang] : Object.keys(languages)) {
      for (const destination of page ? [page] : Object.keys(pages)) {
        const path = `${languages[language]}/${pages[destination]}${pages[destination] ? '/' : ''}`;
        const url = new URL(path, origin);
        if (!canonical.has(url.href)) throw new Error(`Page absent from sitemap: ${url.href}`);
        url.searchParams.set('utm_source', platform);
        url.searchParams.set('utm_medium', 'social');
        url.searchParams.set('utm_campaign', campaign);
        url.searchParams.set('utm_content', content);
        links.push({ source: platform, language, destination, url: url.href });
      }
    }
  }
  return links;
}

async function main() {
  const args = process.argv.slice(2);
  const allowed = new Set(['campaign', 'content', 'source', 'lang', 'page', 'out']);
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    if (!allowed.has(key) || !args[i + 1] || args[i + 1].startsWith('--')) throw new Error(`Invalid argument: ${args[i]}`);
    options[key] = args[i + 1];
  }
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const links = campaignLinks(options, sitemap);
  if (!options.out) {
    console.log(JSON.stringify(links, null, 2));
    return;
  }
  const text = `# Casa Antonio campaign links\n\nCampaign: ${options.campaign}. Content: ${options.content}.\n\nUse these links on external profiles/posts only. Apartment posts go to A/B; long-stay posts go to Long stay; language should match the post. Do not tag internal navigation or Airbnb links. These are prepared links, not published profile changes. Use a distinct content name for each linked post. A shared bio link cannot attribute individual video views to a particular post.\n\n[Google campaign guidance](https://support.google.com/analytics/answer/10917952?hl=en)\n\n| Source | Language | Destination | URL |\n| --- | --- | --- | --- |\n${links.map(l => `| ${l.source} | ${l.language} | ${l.destination} | [Open link](${l.url}) |`).join('\n')}\n`;
  await writeFile(options.out, text, 'utf8');
  console.log(`Prepared ${links.length} links: ${options.out}. Nothing published.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}

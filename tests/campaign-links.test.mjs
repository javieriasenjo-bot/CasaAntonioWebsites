import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { campaignLinks } from '../scripts/campaign-links.mjs';
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const options = { campaign: 'casa_antonio_2026_10', content: 'profile' };

test('campaign links cover canonical language destinations without redirecting or changing domains', () => {
  const links = campaignLinks(options, sitemap);
  assert.equal(links.length, 64);
  assert.equal(new Set(links.map(l => l.url)).size, 64);
  const ja = campaignLinks({ ...options, source: 'instagram', lang: 'ja', page: 'a' }, sitemap);
  assert.equal(ja.length, 1);
  const url = new URL(ja[0].url);
  assert.equal(url.origin, 'https://casaantonio.jp');
  assert.equal(url.pathname, '/ja/casa-antonio-a/');
  assert.equal(url.searchParams.get('utm_source'), 'instagram');
  assert.equal(url.searchParams.get('utm_content'), 'profile');
});
test('campaign links reject missing routes, source aliases, invalid languages and unsafe campaign input', () => {
  for (const patch of [{ source: 'ig' }, { lang: 'zh-cn' }, { page: 'airbnb' }, { campaign: 'SummerSale' }, { content: 'guest@example.com' }, { lang: '__proto__' }]) {
    assert.throws(() => campaignLinks({ ...options, ...patch }, sitemap));
  }
  assert.throws(() => campaignLinks(options, '<urlset/>'));
});

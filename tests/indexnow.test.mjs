import test from 'node:test';
import assert from 'node:assert/strict';
import { selectUrls } from '../scripts/indexnow.mjs';

const url = 'https://casaantonio.jp/long-stay/';
const xml = `<urlset><url><loc>${url}</loc></url></urlset>`;
test('IndexNow accepts deployed canonical candidates and deduplicates', () => {
  assert.deepEqual(selectUrls(xml, [url, url]), [url]);
});
test('IndexNow rejects foreign, redirected, tracking, missing and empty candidates', () => {
  for (const value of ['https://example.com/long-stay/', 'https://casaantonio.jp/long-stay', `${url}?utm_source=test`, `${url}#quote`, 'https://casaantonio.jp/415n/']) {
    assert.throws(() => selectUrls(xml, [value]));
  }
  assert.throws(() => selectUrls(xml, []));
  assert.throws(() => selectUrls('<urlset/>', [url]));
});

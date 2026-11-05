import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Some facts in src/data are only correct until a known date (Upopoy winter hours, the
// Snow Festival dates, review scores due for a recheck). Each one carries a comment like
// `// validUntil: "YYYY-MM-DD"` next to it. This test fails once any of those dates has
// passed, so stale content doesn't ship silently.
const dataDir = fileURLToPath(new URL("../src/data", import.meta.url));
const MARKER = /validUntil:\s*"(\d{4}-\d{2}-\d{2})"/g;

function tsFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? tsFiles(join(dir, entry.name))
      : entry.name.endsWith(".ts")
        ? [join(dir, entry.name)]
        : [],
  );
}

test("no validUntil marker in src/data has passed", () => {
  const today = new Date().toISOString().slice(0, 10);
  const found = [];
  for (const file of tsFiles(dataDir)) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(MARKER)) found.push({ file, validUntil: match[1] });
  }
  assert.ok(found.length >= 3, "expected validUntil markers for Upopoy hours, the Snow Festival dates and the reviews recheck");
  for (const { file, validUntil } of found) {
    assert.ok(validUntil >= today, `${file}: validUntil "${validUntil}" has passed — update the fact and its marker`);
  }
});

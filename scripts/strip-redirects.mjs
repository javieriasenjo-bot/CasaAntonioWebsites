import { rmSync } from "node:fs";

for (const path of ["dist/_redirects", "public/_redirects"]) {
  rmSync(path, { force: true });
}

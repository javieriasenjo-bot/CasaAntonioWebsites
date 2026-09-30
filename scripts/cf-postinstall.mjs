// Workers Builds clones the repo and runs `npx wrangler deploy` with no
// build step. dist/ has to exist before that, so this runs only there.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

if (process.env.WORKERS_CI !== "1") {
  process.exit(0);
}

const require = createRequire(import.meta.url);

function run(command, args, required) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status === 0) return;
  if (required) process.exit(result.status ?? 1);
  console.warn(`${command} ${args.join(" ")} failed; continuing`);
}

function packageInstall(name) {
  try {
    return join(dirname(require.resolve(`${name}/package.json`)), "install.js");
  } catch {
    return null;
  }
}

// npm on this builder skips dependency install scripts unless allowScripts
// lists them. Run the two this project needs, in case that list was ignored.
const esbuildInstall = packageInstall("esbuild");
if (esbuildInstall && existsSync(esbuildInstall)) {
  run(process.execPath, [esbuildInstall], true);
}
const workerdInstall = packageInstall("workerd");
if (workerdInstall && existsSync(workerdInstall)) {
  run(process.execPath, [workerdInstall], false);
}

run("npm", ["run", "build"], true);

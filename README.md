# Casa Antonio

Static site for casaantonio.jp. English, Japanese, Chinese, and Korean.

## Cloudflare

This repo includes `wrangler.jsonc`, so `npx wrangler deploy` does not ask questions.

In the Cloudflare project (Workers, not a blank prompt):

- Build command: leave empty, or set `npm run build`
- Deploy command: `npx wrangler deploy`

`npm install` already builds the `dist` folder. Wrangler uploads that folder. Do not add an A record by hand. After a green deploy, add custom domains `casaantonio.jp` and `www.casaantonio.jp`.

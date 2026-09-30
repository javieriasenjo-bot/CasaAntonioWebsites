# Casa Antonio

Website for Casa Antonio A and Casa Antonio B in Kita-ku, Sapporo.
Domain: https://casaantonio.jp

English and Japanese. Booking links go to the Airbnb listings.

## Put it on GitHub

1. Unzip this folder.
2. Open https://github.com/javieriasenjo-bot/CasaAntonioWebsites
3. If the repo is empty: **Add file → Upload files**, drag everything inside the unzipped folder (not the zip itself), then commit.
4. Do not upload `node_modules`.

GitHub Desktop also works: **File → Add local repository** on the unzipped folder, then **Publish repository**.

## Host it on Cloudflare

DNS for `casaantonio.jp` must already use Cloudflare nameservers (set at GoDaddy).

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
2. Choose `CasaAntonioWebsites`.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.
5. Project → **Custom domains** → add `casaantonio.jp`, then `www.casaantonio.jp`.

Cloudflare writes the DNS records. Do not add an A record by hand.

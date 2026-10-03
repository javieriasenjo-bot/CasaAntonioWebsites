# Submit all sitemap URLs to IndexNow (Bing, Yandex, etc.). Run AFTER the key file is live at
# https://casaantonio.jp/e5343769db62565dac8a830bd470b06a.txt
$key = "e5343769db62565dac8a830bd470b06a"
$xml = [xml](Invoke-WebRequest -UseBasicParsing "https://casaantonio.jp/sitemap.xml").Content
$urls = @($xml.urlset.url | ForEach-Object { $_.loc })
$body = @{ host = "casaantonio.jp"; key = $key; keyLocation = "https://casaantonio.jp/$key.txt"; urlList = $urls } | ConvertTo-Json
$r = Invoke-WebRequest -UseBasicParsing -Method Post -Uri "https://api.indexnow.org/indexnow" -ContentType "application/json; charset=utf-8" -Body $body
"Submitted $($urls.Count) URLs. HTTP $($r.StatusCode)"

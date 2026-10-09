// Runs before hydration. This is the sole producer of outbound click events.
// Keep the legacy GTM listener guard until that listener is removed from the container.
(function (w, d) {
  if (w.__caClickListener) return;
  w.__caClickListener = true;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  d.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var url = a.href;
    var lang = d.documentElement.lang || "en";
    var base = { source_url: w.location.href, destination_url: url, page_language: lang };
    var next = a.getAttribute("data-language");
    if (next) {
      if (a.getAttribute("aria-current") !== "true") {
        w.dataLayer.push(Object.assign(base, { event: "language_change", selected_language: next }));
      }
      return;
    }
    var map = a.getAttribute("data-map-provider");
    if (map) {
      w.dataLayer.push(Object.assign(base, { event: "map_click", map_provider: map, page_path: w.location.pathname }));
      return;
    }
    var intent = a.getAttribute("data-intent");
    var parsed;
    try { parsed = new URL(url); } catch (_) { return; }
    var provider = /(^|\.)airbnb\.com$/.test(parsed.hostname) ? "airbnb"
      : /(^|\.)booking\.com$/.test(parsed.hostname) ? "booking" : null;
    var property = a.getAttribute("data-property");
    if (!property && provider === "airbnb") {
      property = parsed.pathname.indexOf("1248284267045468378") !== -1 ? "a"
        : parsed.pathname.indexOf("1248260873560502499") !== -1 ? "b" : null;
    }
    var placement = a.getAttribute("data-placement") || (a.closest("header") ? "header" : a.closest("footer") ? "footer" : "body");
    if (provider && (intent || property)) {
      var event = intent === "reviews" ? "review_click" : intent === "inquiry" ? "inquiry_click" : "airbnb_click";
      w.dataLayer.push(Object.assign(base, { event: event, intent: intent || "booking", provider: provider,
        property: property || "unknown", apartment_name: property === "a" ? "Casa Antonio A" : property === "b" ? "Casa Antonio B" : "unknown",
        link_location: placement }));
    } else if (/^(mailto:|tel:)|^https:\/\/(wa\.me|(?:www\.)?line\.me)\//i.test(url)) {
      var method = /^mailto:/i.test(url) ? "email" : /^tel:/i.test(url) ? "phone" : /line\.me/i.test(url) ? "line" : "whatsapp";
      w.dataLayer.push(Object.assign(base, { event: "contact_click", contact_method: method, link_location: placement }));
    }
  }, true);

  function load() {
    if (w.__gtm) return;
    w.__gtm = true;
    var s = d.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=GTM-T8TLRH4L";
    d.head.appendChild(s);
    ["pointerdown", "keydown", "scroll", "touchstart"].forEach(function (name) { w.removeEventListener(name, load); });
  }
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach(function (name) { w.addEventListener(name, load, { once: true, passive: true }); });
  // Do not wait for every image/iframe's load event before starting the fallback timer.
  function idle() { w.setTimeout(load, 3500); }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", idle, { once: true });
  else idle();
})(window, document);

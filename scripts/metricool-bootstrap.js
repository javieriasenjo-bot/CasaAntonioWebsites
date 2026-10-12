// Visit measurement only. Keep it separate from GA4's click-event producer.
(function (w, d) {
  if (!/^(www\.)?casaantonio\.jp$/.test(w.location.hostname) || w.__caMetricool) return;
  w.__caMetricool = true;
  function load() {
    var script = d.createElement("script");
    script.async = true;
    script.src = "https://tracker.metricool.com/resources/be.js";
    var tracked = false;
    script.onload = function () {
      if (tracked || !w.beTracker || typeof w.beTracker.t !== "function") return;
      tracked = true;
      w.beTracker.t({ hash: "ffd44c179566f41dd21d51d09878d58d" });
    };
    d.head.appendChild(script);
  }
  function ready() {
    if (w.requestIdleCallback) w.requestIdleCallback(load, { timeout: 2000 });
    else w.setTimeout(load, 0);
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", ready, { once: true });
  else ready();
})(window, document);

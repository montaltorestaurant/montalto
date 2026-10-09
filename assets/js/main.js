/* Pizzeria Montalto – Seitenlogik (keine Abhängigkeiten) */
(function () {
  "use strict";

  var STANDORTE = window.STANDORTE || {};
  var KARTE = window.SPEISEKARTE || [];
  var body = document.body;
  var aktuell = body.getAttribute("data-standort") || "frankfurt";
  var root = body.getAttribute("data-root") || "";

  var TAGE = ["mo", "di", "mi", "do", "fr", "sa", "so"];
  var TAG_NAME = { mo: "Montag", di: "Dienstag", mi: "Mittwoch", do: "Donnerstag", fr: "Freitag", sa: "Samstag", so: "Sonntag" };
  var TAG_KURZ = { mo: "Mo", di: "Di", mi: "Mi", do: "Do", fr: "Fr", sa: "Sa", so: "So" };
  var SCHEMA_TAG = { mo: "Monday", di: "Tuesday", mi: "Wednesday", do: "Thursday", fr: "Friday", sa: "Saturday", so: "Sunday" };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function ort(el) { return STANDORTE[(el && el.getAttribute("data-loc")) || aktuell]; }
  function mapsUrl(s) {
    return "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Pizzeria Montalto, " + s.strasse + ", " + s.plz + " " + s.ort);
  }

  /* ---------- Standortdaten in die Seite schreiben ---------- */

  $$("[data-fill]").forEach(function (el) {
    var s = ort(el); if (!s) return;
    var key = el.getAttribute("data-fill");
    var wert = key === "plzOrt" ? s.plz + " " + s.ort : s[key];
    if (wert != null) el.textContent = wert;
  });
  $$("[data-tel]").forEach(function (el) { var s = ort(el); if (s) el.href = "tel:" + s.tel; });
  $$("[data-maps]").forEach(function (el) { var s = ort(el); if (s) el.href = mapsUrl(s); });

  /* ---------- Öffnungszeiten ---------- */

  function minuten(hhmm) { var p = hhmm.split(":"); return +p[0] * 60 + +p[1]; }

  function jetztBerlin() {
    var teile = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var t = {};
    teile.forEach(function (p) { t[p.type] = p.value; });
    var idx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(t.weekday);
    return { tag: idx, min: (+t.hour % 24) * 60 + +t.minute };
  }

  function status(s) {
    var j = jetztBerlin();
    var heute = s.zeiten[TAGE[j.tag]] || [];
    for (var i = 0; i < heute.length; i++) {
      var von = minuten(heute[i][0]), bis = minuten(heute[i][1]);
      if (j.min >= von && j.min < bis) {
        return { offen: true, text: "Jetzt geöffnet, bis " + heute[i][1] + " Uhr" };
      }
      if (j.min < von) {
        return { offen: false, text: (i === 0 ? "Geschlossen, öffnet heute um " : "Mittagspause, wieder ab ") + heute[i][0] + " Uhr" };
      }
    }
    for (var d = 1; d <= 7; d++) {
      var key = TAGE[(j.tag + d) % 7];
      var z = s.zeiten[key] || [];
      if (z.length) {
        var wann = d === 1 ? "morgen" : "am " + TAG_NAME[key];
        return { offen: false, text: "Geschlossen, öffnet " + wann + " um " + z[0][0] + " Uhr" };
      }
    }
    return { offen: false, text: "Derzeit geschlossen" };
  }

  function statusZeichnen() {
    $$("[data-status]").forEach(function (el) {
      var s = ort(el); if (!s) return;
      var st = status(s);
      el.textContent = st.text;
      el.classList.toggle("ist-offen", st.offen);
      el.classList.toggle("ist-zu", !st.offen);
    });
  }
  statusZeichnen();
  setInterval(statusZeichnen, 60000);

  function gleich(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

  $$("[data-zeiten]").forEach(function (tbody) {
    var s = ort(tbody); if (!s) return;
    var heute = TAGE[jetztBerlin().tag];
    var gruppen = [];
    TAGE.forEach(function (t) {
      var letzte = gruppen[gruppen.length - 1];
      if (letzte && gleich(letzte.z, s.zeiten[t])) letzte.tage.push(t);
      else gruppen.push({ tage: [t], z: s.zeiten[t] || [] });
    });
    tbody.innerHTML = gruppen.map(function (g) {
      var label = g.tage.length === 1 ? TAG_NAME[g.tage[0]]
        : TAG_KURZ[g.tage[0]] + " – " + TAG_KURZ[g.tage[g.tage.length - 1]];
      var zeit = g.z.length
        ? g.z.map(function (f) { return "<span>" + f[0] + " – " + f[1] + " Uhr</span>"; }).join("")
        : '<span class="zu">Ruhetag</span>';
      var istHeute = g.tage.indexOf(heute) > -1;
      return "<tr" + (istHeute ? ' class="ist-heute"' : "") + "><th scope=\"row\">" + label + "</th><td>" + zeit + "</td></tr>";
    }).join("");
  });

  /* ---------- Strukturierte Daten für Google ---------- */

  (function () {
    var s = STANDORTE[aktuell]; if (!s) return;
    var spec = [];
    TAGE.forEach(function (t) {
      (s.zeiten[t] || []).forEach(function (f) {
        spec.push({ "@type": "OpeningHoursSpecification", dayOfWeek: SCHEMA_TAG[t], opens: f[0], closes: f[1] });
      });
    });
    var data = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: s.name,
      telephone: s.tel,
      servesCuisine: ["Italienisch", "Pizza", "Pasta"],
      priceRange: "€",
      acceptsReservations: true,
      address: { "@type": "PostalAddress", streetAddress: s.strasse, postalCode: s.plz, addressLocality: s.ort, addressCountry: "DE" },
      openingHoursSpecification: spec,
      hasMap: mapsUrl(s),
      url: location.href.split("#")[0]
    };
    var tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(data);
    document.head.appendChild(tag);
  })();

  /* ---------- Speisekarte ---------- */

  var ICON = {
    veg: '<svg class="icon icon--veg" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="vegetarisch"><title>vegetarisch</title><path d="M20.5 3.5C11 3 4.5 8 4.5 15.2c0 1.6.4 3 1.1 4.3L3.3 21.8l1.1 1.1 2.4-2.4c1.2.6 2.6 1 4 1 7.4 0 11.4-7.6 9.7-18zM8.2 17.6c2.6-4.4 5.5-7.3 9.2-9.6-3.1 3-5.6 6.2-7.7 10.6-.5-.3-1-.6-1.5-1z"/></svg>',
    scharf: '<svg class="icon icon--scharf" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="scharf"><title>scharf</title><path d="M15.6 2.3c-.8.6-1.2 1.6-1.1 2.6-1.4.3-2.4 1.4-2.6 2.8C9.2 10.9 5.6 15.6 2.5 18.4c-.6.5-.3 1.5.5 1.6 7.8 1.2 15.4-3 17.4-9.6.5-1.6-.2-3.1-1.6-3.9-.1-1.1-.8-2-1.8-2.4 0-.6.3-1.1.8-1.4l-2.2-.4zm1.7 4.4c.6 0 1.1.3 1.4.8-1-.1-2 .2-2.8.8.2-.9.8-1.6 1.4-1.6z"/></svg>',
    lupe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  };

  var euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

  function gerichtHtml(g) {
    var tags = g.tags || [];
    var zeichen = "";
    if (tags.indexOf("veg") > -1 && tags.indexOf("vegan") < 0) zeichen += ICON.veg;
    if (tags.indexOf("vegan") > -1) zeichen += '<span class="badge badge--vegan">vegan</span>';
    if (tags.indexOf("scharf") > -1) zeichen += ICON.scharf;
    if (g.haus) zeichen += '<span class="badge badge--haus">Hausgericht</span>';
    var suchtext = [g.nr, g.name, g.zutaten, tags.indexOf("vegan") > -1 ? "vegan" : ""].join(" ").toLowerCase();
    return '<li class="gericht" data-tags="' + tags.join(" ") + '" data-suche="' + esc(suchtext) + '">' +
      '<span class="g-nr">' + esc(g.nr) + "</span>" +
      '<h4 class="g-name">' + esc(g.name) + zeichen + "</h4>" +
      '<span class="g-preis">' + euro.format(g.preis) + "</span>" +
      (g.zutaten ? '<p class="g-zutaten">' + esc(g.zutaten) + "</p>" : "") +
      "</li>";
  }

  var karteEl = $("#karte-inhalt");
  if (karteEl && KARTE.length) {
    var tabs = KARTE.map(function (k) {
      return '<a href="#k-' + k.id + '">' + esc(k.titel.split(" & ")[0]) + "</a>";
    }).join("");

    var tafeln = KARTE.map(function (k) {
      return '<section class="tafel" id="k-' + k.id + '" aria-labelledby="k-' + k.id + '-t">' +
        '<header class="tafel-kopf"><h3 id="k-' + k.id + '-t">' + esc(k.titel) + "</h3>" +
        (k.zusatz ? "<p>" + esc(k.zusatz) + "</p>" : "") + "</header>" +
        '<ul class="gerichte">' + k.gerichte.map(gerichtHtml).join("") + "</ul>" +
        (k.hinweise ? '<ul class="hinweise">' + k.hinweise.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" : "") +
        "</section>";
    }).join("");

    karteEl.innerHTML =
      '<div class="karte-werkzeug"><div class="wrap">' +
        '<nav class="karte-tabs" aria-label="Kategorien der Speisekarte">' + tabs + "</nav>" +
        '<div class="karte-filter">' +
          '<label class="suche">' + ICON.lupe + '<span class="sr-only">Speisekarte durchsuchen</span>' +
            '<input type="search" id="karte-suche" placeholder="Gericht, Zutat oder Nummer" autocomplete="off"></label>' +
          '<button type="button" class="chip" data-filter="veg" aria-pressed="false">' + ICON.veg + '<span class="chip-text">Vegetarisch</span></button>' +
          '<button type="button" class="chip" data-filter="scharf" aria-pressed="false">' + ICON.scharf + '<span class="chip-text">Scharf</span></button>' +
        "</div>" +
      "</div></div>" +
      '<div class="wrap">' +
        '<div class="karte-leer" hidden role="status"><p></p><button type="button" class="btn" id="karte-reset">Filter zurücksetzen</button></div>' +
        '<div class="tafeln">' + tafeln + "</div>" +
      "</div>";

    var input = $("#karte-suche");
    var chips = $$(".chip[data-filter]");
    var leer = $(".karte-leer");

    function filtern() {
      var q = input.value.trim().toLowerCase();
      var aktiv = chips.filter(function (c) { return c.getAttribute("aria-pressed") === "true"; })
        .map(function (c) { return c.getAttribute("data-filter"); });
      var treffer = 0;
      $$(".tafel").forEach(function (tafel) {
        var sichtbar = 0;
        $$(".gericht", tafel).forEach(function (li) {
          var tags = li.getAttribute("data-tags").split(" ");
          var ok = (!q || li.getAttribute("data-suche").indexOf(q) > -1) &&
            aktiv.every(function (f) { return tags.indexOf(f) > -1; });
          li.hidden = !ok;
          if (ok) sichtbar++;
        });
        tafel.hidden = sichtbar === 0;
        treffer += sichtbar;
      });
      leer.hidden = treffer > 0;
      if (!treffer) {
        $("p", leer).textContent = q
          ? "Kein Gericht passt zu „" + input.value.trim() + "“. Eine andere Zutat versuchen oder die Filter zurücksetzen."
          : "Kein Gericht passt zu dieser Filterkombination.";
      }
    }

    input.addEventListener("input", filtern);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        c.setAttribute("aria-pressed", c.getAttribute("aria-pressed") === "true" ? "false" : "true");
        filtern();
      });
    });
    $("#karte-reset").addEventListener("click", function () {
      input.value = "";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      filtern();
      input.focus();
    });

    /* aktiver Reiter beim Scrollen */
    var links = $$(".karte-tabs a");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (eintraege) {
        eintraege.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) {
            var an = a.getAttribute("href") === "#" + e.target.id;
            a.classList.toggle("ist-aktiv", an);
            if (an && a.scrollIntoView && window.matchMedia("(max-width: 860px)").matches) {
              a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
            }
          });
        });
      }, { rootMargin: "-35% 0px -60% 0px" });
      $$(".tafel").forEach(function (t) { io.observe(t); });
    }
  }

  /* ---------- Hausgerichte ---------- */

  var hausEl = $("#haus-reihe");
  if (hausEl) {
    var ART = { pizza: "Pizza", pasta: "Pasta", salate: "Salat" };
    var html = "";
    KARTE.forEach(function (k) {
      k.gerichte.forEach(function (g) {
        if (!g.haus) return;
        html += '<article class="haus-gericht">' +
          '<p class="haus-art">' + (ART[k.id] || k.titel) + " Nr. " + esc(g.nr) + "</p>" +
          "<h3>" + esc(g.name) + "</h3>" +
          '<p class="zutaten">' + esc(g.zutaten) + "</p>" +
          '<p class="haus-preis">' + euro.format(g.preis) + "</p>" +
          "</article>";
      });
    });
    hausEl.innerHTML = html;
  }

  /* ---------- Kopfzeile ---------- */

  var kopf = $(".kopf");
  if (kopf && !kopf.classList.contains("kopf--fest")) {
    var onScroll = function () { kopf.classList.toggle("ist-gescrollt", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  $$("[data-jahr]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();

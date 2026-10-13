/* =========================================================
   STANDORTE – Adresse, Telefon und Öffnungszeiten
   ---------------------------------------------------------
   Alles, was auf der Seite über einen Standort steht,
   kommt aus dieser Datei. Hier ändern = überall geändert.

   Öffnungszeiten: pro Wochentag eine Liste von Zeitfenstern.
   []  = Ruhetag

   reservierung: Link zur Online-Reservierung, oder false = keine Reservierung
   lieferung: Liefergebiete mit Liefergebühr in Euro
   (weglassen, wenn keine Gebühren angezeigt werden sollen)
   ========================================================= */

window.STANDORTE = {
  frankfurt: {
    name: "Pizzeria Montalto Frankfurt",
    kurz: "Frankfurt",
    lage: "im Frankfurter Europaviertel",
    strasse: "Europa-Allee 43",
    plz: "60327",
    ort: "Frankfurt am Main",
    telAnzeige: "069 98191775",
    instagram: "montaltoffm",
    tel: "+496998191775",
    seite: "",              // Hauptseite
    reservierung: "https://www.opentable.com/r/pizzeria-montalto-frankfurt-am-main",
    zeiten: {
      mo: [["11:00", "15:00"], ["17:00", "22:00"]],
      di: [["11:00", "15:00"], ["17:00", "22:00"]],
      mi: [["11:00", "15:00"], ["17:00", "22:00"]],
      do: [["11:00", "15:00"], ["17:00", "22:00"]],
      fr: [["11:00", "15:00"], ["17:00", "22:00"]],
      sa: [["16:00", "22:00"]],
      so: [["16:00", "22:00"]]
    }
  },

  oberursel: {
    name: "Pizzeria Montalto Oberursel",
    kurz: "Oberursel",
    lage: "in Oberursel (Taunus)",
    strasse: "Industriestraße 7",
    plz: "61440",
    ort: "Oberursel (Taunus)",
    telAnzeige: "06172 2663244",
    instagram: "montalto_pizza",
    tel: "+4961722663244",
    seite: "oberursel/",
    reservierung: false,    // laut Google: keine Reservierungen
    lieferung: [
      ["Oberstedten", 1.0],
      ["Oberursel", 2.0],
      ["Bad Homburg", 2.0],
      ["Nieder-Eschbach, Kalbach, Riedberg", 4.5]
    ],
    zeiten: {
      mo: [["11:00", "15:00"], ["17:00", "21:00"]],
      di: [["11:00", "15:00"], ["17:00", "21:00"]],
      mi: [["11:00", "15:00"], ["17:00", "21:00"]],
      do: [["11:00", "15:00"], ["17:00", "21:00"]],
      fr: [["11:00", "15:00"], ["17:00", "21:00"]],
      sa: [["16:00", "21:00"]],
      so: [["16:00", "21:00"]]
    }
  }
};

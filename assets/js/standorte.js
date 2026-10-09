/* =========================================================
   STANDORTE – Adresse, Telefon und Öffnungszeiten
   ---------------------------------------------------------
   Alles, was auf der Seite über einen Standort steht,
   kommt aus dieser Datei. Hier ändern = überall geändert.

   Öffnungszeiten: pro Wochentag eine Liste von Zeitfenstern.
   []  = Ruhetag
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
    tel: "+496998191775",
    seite: "",              // Hauptseite
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
    tel: "+4961722663244",
    seite: "oberursel/",
    zeiten: {
      mo: [["11:30", "15:00"], ["17:30", "22:30"]],
      di: [["11:30", "15:00"], ["17:30", "22:30"]],
      mi: [["11:30", "15:00"], ["17:30", "22:30"]],
      do: [["11:30", "15:00"], ["17:30", "22:30"]],
      fr: [["11:30", "15:00"], ["17:30", "22:30"]],
      sa: [],
      so: [["11:30", "15:00"], ["17:30", "22:30"]]
    }
  }
};

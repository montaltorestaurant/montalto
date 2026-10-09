/* =========================================================
   SPEISEKARTE – gilt für beide Standorte
   ---------------------------------------------------------
   Preise ändern: einfach die Zahl bei "preis" anpassen.
   Tags:  "veg" = vegetarisch   "scharf" = scharf   "vegan" = vegan
   ========================================================= */

window.SPEISEKARTE = [
  {
    id: "pizza",
    titel: "Pizza",
    zusatz: "Ø 30 cm",
    gerichte: [
      { nr: "00", name: "Pane", zutaten: "Tomaten, Knoblauch", preis: 5.5, tags: ["veg"] },
      { nr: "01", name: "Margherita", zutaten: "Tomaten, Käse", preis: 8.0, tags: ["veg"] },
      { nr: "02", name: "Salame", zutaten: "Tomaten, Käse, Salami", preis: 9.0 },
      { nr: "03", name: "Funghi", zutaten: "Tomaten, Käse, Pilze", preis: 9.0 },
      { nr: "04", name: "Silana", zutaten: "Tomaten, Käse, Salami, Pilze", preis: 9.5 },
      { nr: "05", name: "Marinara", zutaten: "Tomaten, Käse, Salami, Pilze, Sardellen", preis: 10.0 },
      { nr: "06", name: "Capricciosa", zutaten: "Tomaten, Käse, Schinken, Pilze, Peperoni", preis: 10.0, tags: ["scharf"] },
      { nr: "07", name: "Solitaria", zutaten: "Tomaten, Käse, Schinken, Pilze", preis: 10.0 },
      { nr: "08", name: "Zingara", zutaten: "Tomaten, Käse, Salami, Pilze, Zwiebeln", preis: 10.0 },
      { nr: "09", name: "Diavolo", zutaten: "Tomaten, Käse, Salami, Zwiebeln, Oliven, Sardellen", preis: 10.5 },
      { nr: "10", name: "Pazza", zutaten: "Tomaten, Käse, Salami, Schinken, Zwiebeln, Oliven", preis: 10.5 },
      { nr: "11", name: "Fiore", zutaten: "Tomaten, Käse, Schinken, Zwiebeln, Oliven, Sardellen", preis: 10.5 },
      { nr: "12", name: "Bella", zutaten: "Tomaten, Käse, Salami, Artischocken", preis: 10.0 },
      { nr: "13", name: "Della Casa", zutaten: "Tomaten, Käse, Salami, Schinken, Artischocken", preis: 10.5 },
      { nr: "14", name: "Rustica", zutaten: "Tomaten, Käse, Salami, Sardellen, Artischocken", preis: 10.5 },
      { nr: "15", name: "Piccante", zutaten: "Tomaten, Käse, Peperoniwurst, Pilze, Zwiebeln, Peperoncino", preis: 10.5, tags: ["scharf"] },
      { nr: "16", name: "Stedten", zutaten: "Tomaten, Käse, Peperoniwurst, Mais, Mozzarella", preis: 11.0 },
      { nr: "17", name: "Amore", zutaten: "Tomaten, Käse, Mais, Paprika, Oliven", preis: 10.0 },
      { nr: "18", name: "Buongustaia", zutaten: "Tomaten, Käse, Salami, Pilze, Artischocken", preis: 10.5 },
      { nr: "19", name: "Tonno", zutaten: "Tomaten, Käse, Thunfisch, Zwiebeln", preis: 10.5 },
      { nr: "20", name: "Quattro Stagioni", zutaten: "Tomaten, Käse, Salami, Schinken, Pilze, Paprika", preis: 11.0 },
      { nr: "21", name: "Mafiosa", zutaten: "Tomaten, Käse, Salami, Paprika, Peperoniwurst", preis: 10.5, tags: ["scharf"] },
      { nr: "22", name: "Frutti di Mare", zutaten: "Tomaten, Käse, Knoblauch, Meeresfrüchte", preis: 12.0 },
      { nr: "23", name: "Hawaii", zutaten: "Tomaten, doppelte Portion Käse, Schinken, Ananas", preis: 10.5 },
      { nr: "24", name: "Bruschetta Fantasia", zutaten: "Frische Tomaten, Rucola, Parmesan", preis: 11.0, tags: ["veg"] },
      { nr: "25", name: "Montalto", zutaten: "Tomaten, Mozzarella, Parmaschinken, Rucola, Parmesan", preis: 13.0, haus: true },
      { nr: "26", name: "Bianca", zutaten: "Sahne, Käse, Zwiebeln", preis: 9.0, tags: ["veg"] },
      { nr: "27", name: "Rucola", zutaten: "Tomaten, Käse, Peperoniwurst, Mozzarella, Rucola", preis: 11.5, tags: ["scharf"] },
      { nr: "28", name: "Italia", zutaten: "Tomaten, Käse, Mozzarella, Gorgonzola, Parmesan", preis: 11.5, tags: ["veg"] },
      { nr: "29", name: "Ortolana", zutaten: "Tomaten, Käse, Pilze, Aubergine, Zucchini, Paprika, Zwiebeln, Oliven", preis: 11.5, tags: ["veg"] },
      { nr: "30", name: "Salmone", zutaten: "Tomaten, Käse, Knoblauch, Lachs, Spinat, Gorgonzola", preis: 13.0 },
      { nr: "31", name: "Mozzarella", zutaten: "Tomaten, Mozzarella, frische Tomaten, Basilikum", preis: 10.5, tags: ["veg"] },
      { nr: "32", name: "Vegana", zutaten: "Tomaten, Pilze, Aubergine, Zucchini, Brokkoli, Rucola, ohne Käse", preis: 11.5, tags: ["veg", "vegan"] },
      { nr: "33", name: "Capitano", zutaten: "Tomaten, Käse, Sardellen, Kapern, Zwiebeln, Oliven", preis: 10.5 },
      { nr: "34", name: "Popeye", zutaten: "Tomaten, doppelte Portion Käse, Spinat, Ei, Knoblauch", preis: 10.5, tags: ["veg"] }
    ]
  },
  {
    id: "bianche",
    titel: "Le Bianche & Familienpizza",
    zusatz: "ohne Tomatensauce",
    gerichte: [
      { nr: "35", name: "Tricolore", zutaten: "Mozzarella, frische Tomaten, Rucola, Parmesan", preis: 12.0, tags: ["veg"] },
      { nr: "36", name: "Familienpizza", zutaten: "ca. 36 cm, mit zwei Belägen nach Wahl", preis: 18.5 }
    ],
    hinweise: ["Für jeden Extrabelag berechnen wir zwischen 1,00 € und 5,00 €."]
  },
  {
    id: "pasta",
    titel: "Pasta",
    zusatz: "Spaghetti, Rigatoni, Tagliatelle, Tortellini oder Gnocchi",
    gerichte: [
      { nr: "70", name: "Pomodoro", zutaten: "mit Tomatensoße", preis: 8.5, tags: ["veg"] },
      { nr: "71", name: "Bolognese", zutaten: "mit Hackfleischsoße (Rind)", preis: 9.5 },
      { nr: "72", name: "Carbonara", zutaten: "mit Sahne, Schinken, Ei", preis: 9.5 },
      { nr: "73", name: "Frutti di Mare", zutaten: "mit frischen Tomaten, Weißwein, Meeresfrüchten, Knoblauch", preis: 12.0 },
      { nr: "74", name: "Scampi", zutaten: "mit frischen Tomaten, Scampi, Petersilie, Knoblauch", preis: 15.0 },
      { nr: "75", name: "Aglio e Olio", zutaten: "mit frischen Tomaten, Knoblauch, Petersilie, Peperoncino", preis: 9.5, tags: ["veg", "scharf"] },
      { nr: "76", name: "Alla Panna", zutaten: "mit Sahne, Schinken", preis: 9.5 },
      { nr: "77", name: "Gorgonzola", zutaten: "mit Sahne, Gorgonzola, Basilikum", preis: 10.5, tags: ["veg"] },
      { nr: "78", name: "Quattro Formaggi", zutaten: "mit Sahne, vier Käsesorten", preis: 11.0, tags: ["veg"] },
      { nr: "79", name: "All'Arrabbiata", zutaten: "mit Tomatensoße, Knoblauch, Oliven, Peperoncino", preis: 9.0, tags: ["veg", "scharf"] },
      { nr: "80", name: "Gamberetti e Rucola", zutaten: "mit Tomaten-Sahnesoße, Rucola, Shrimps, Knoblauch", preis: 12.0 },
      { nr: "81", name: "Salmone e Spinaci", zutaten: "mit Tomaten-Sahnesoße, Spinat, Lachs, Knoblauch", preis: 12.0 },
      { nr: "82", name: "Funghi", zutaten: "mit Sahne, Champignons", preis: 10.0, tags: ["veg"] },
      { nr: "83", name: "Montalto", zutaten: "mit Hackfleisch-Sahnesoße (Rind), Schinken, Erbsen", preis: 10.0, haus: true },
      { nr: "84", name: "Al Pesto", zutaten: "mit Sahne, Knoblauch, Basilikum, Petersilie, Kräutern", preis: 9.5 },
      { nr: "85", name: "Calabrese", zutaten: "mit Tomaten-Sahnesoße, Knoblauch, Champignons, Paprika, Artischocken, Peperoncino, Oliven, Zwiebeln", preis: 10.5, tags: ["veg", "scharf"] },
      { nr: "86", name: "Maestosa", zutaten: "mit Tomaten-Sahnesoße, Schinken, Champignons", preis: 10.0 },
      { nr: "87", name: "Della Mamma", zutaten: "mit Tomatensoße, Knoblauch, Zwiebeln, Hähnchenfilet, Erbsen, Peperoncino", preis: 11.5 },
      { nr: "88", name: "Della Nonna", zutaten: "mit Sahne, frischen Tomaten, Zwiebeln, Rucola, Peperoncino", preis: 10.5, tags: ["veg", "scharf"] },
      { nr: "89", name: "Sorrentina", zutaten: "mit Tomaten, Mozzarella, Basilikum", preis: 10.5, tags: ["veg"] },
      { nr: "90", name: "Lasagne", zutaten: "mit Rinderhackfleisch", preis: 10.5 },
      { nr: "91", name: "Alla Chef", zutaten: "mit Hackfleisch (Rind), Sahnesoße, Schinken, Pilzen", preis: 10.5 },
      { nr: "92", name: "Puttanesca", zutaten: "mit Tomatensoße, Knoblauch, Sardellen, Kapern, Thunfisch, Zwiebeln", preis: 11.0 }
    ],
    hinweise: [
      "Jedes Pastagericht gibt es auch al forno, mit Käse überbacken: + 1,50 €.",
      "Tagliatelle oder Gnocchi: + 1,00 €.",
      "Auf alle Pastagerichte ohne Fisch streuen wir Parmesan. Auf Wunsch lassen wir ihn weg."
    ]
  },
  {
    id: "salate",
    titel: "Insalate",
    zusatz: "mit Essig und Öl oder Joghurt-Dressing",
    gerichte: [
      { nr: "50", name: "Capricciosa", zutaten: "Gemischter Salat, Käse, rote Zwiebeln, Ei", preis: 8.5, tags: ["veg"] },
      { nr: "51", name: "Montalto", zutaten: "Gemischter Salat, Thunfisch, rote Zwiebeln, Käse, Ei", preis: 9.5, haus: true },
      { nr: "52", name: "Insalata di Pomodoro", zutaten: "Tomatensalat, rote Zwiebeln", preis: 7.5, tags: ["veg"] },
      { nr: "53", name: "Mozzarella Caprese", zutaten: "Frische Tomaten, Mozzarella, Oliven, Basilikum", preis: 9.0, tags: ["veg"] },
      { nr: "54", name: "Insalata Luzzi", zutaten: "Gemischter Salat, Scampi in Knoblauch, rote Zwiebeln", preis: 15.0 },
      { nr: "55", name: "Rucola Salat", zutaten: "Rucola, Parmesan, rote Zwiebeln", preis: 10.0, tags: ["veg"] },
      { nr: "56", name: "Vulkano", zutaten: "Gemischter Salat, Rucola, rote Zwiebeln, Parmesan", preis: 10.0, tags: ["veg"] },
      { nr: "57", name: "Italia", zutaten: "Gemischter Salat, Hähnchenfilet, rote Zwiebeln", preis: 11.0 },
      { nr: "58", name: "Fitnessteller", zutaten: "Gemischter Salat, Hähnchenfilet, Mozzarella, Champignons, rote Zwiebeln, Mais", preis: 13.0 },
      { nr: "59", name: "Insalata Verde", zutaten: "Grüner Salat, rote Zwiebeln", preis: 6.5, tags: ["veg", "vegan"] }
    ]
  },
  {
    id: "extras",
    titel: "Panini & Dessert",
    zusatz: "für vorher und nachher",
    gerichte: [
      { nr: "61", name: "Panini", zutaten: "6 Stück", preis: 2.0 },
      { nr: "61", name: "Panini", zutaten: "12 Stück", preis: 4.0 },
      { nr: "62", name: "Panini mit Käse überbacken", zutaten: "12 Stück", preis: 6.5, tags: ["veg"] },
      { nr: "", name: "Appetizer Plate", zutaten: "3 Panini", preis: 5.0 },
      { nr: "", name: "Tiramisu", zutaten: "", preis: 6.0 },
      { nr: "", name: "Panna Cotta", zutaten: "", preis: 4.5 }
    ]
  },
  {
    id: "getraenke",
    titel: "Getränke",
    zusatz: "je 0,33 l",
    gerichte: [
      { nr: "", name: "Cola, Fanta oder Sprite", zutaten: "", preis: 3.0 },
      { nr: "", name: "Apfelschorle", zutaten: "", preis: 3.0 },
      { nr: "", name: "Eistee", zutaten: "", preis: 3.0 },
      { nr: "", name: "Wasser still", zutaten: "", preis: 2.5 },
      { nr: "", name: "Wasser sprudelnd", zutaten: "", preis: 2.5 }
    ]
  }
];

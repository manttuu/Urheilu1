// Henkilo
class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

// Peritään Henkilo Urheilijaan
class Urheilija extends Henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Getit urheilija funktiolle
  getLinkkiKuvaan() {
    return this.linkkiKuvaan;
  }

  setLinkkiKuvaan(linkki) {
    this.linkkiKuvaan = linkki;
  }

  getOmaPaino() {
    return this.omapaino;
  }

  setOmaPaino(paino) {
    this.omapaino = paino;
  }

  getLaji() {
    return this.laji;
  }

  setLaji(laji) {
    this.laji = laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  setSaavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

// Esimerkkejä
const urh1 = new Urheilija(
  "Mika",
  "Matveinen",
  "Masa",
  1990,
  "kuva1.jpg",
  80,
  "Juoksu",
  ["Maratonin voitto"]
);
const urh2 = new Urheilija(
  "Mikko",
  "Mallikas",
  "Mikki",
  1985,
  "kuva2.jpg",
  75,
  "Uinti",
  ["Uintikilpailun voitto"]
);

// Printataan esimerkkejä
console.log(urh1);
console.log("--------------------");
console.log(urh2);

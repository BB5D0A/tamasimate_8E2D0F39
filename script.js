// Adatelemek: 8 telefon (telefon1.jpg ... telefon8.jpg)
var telefonLista = [
  { azonosito: 1, nev: "Pixel Lite", marka: "Pixel", ar: 189000, keszlet: 6, kep: "telefon1.jpg" },
  { azonosito: 2, nev: "Galaxy M", marka: "Samsung", ar: 129000, keszlet: 9, kep: "telefon2.jpg" },
  { azonosito: 3, nev: "iPhone SE", marka: "Apple", ar: 209000, keszlet: 4, kep: "telefon3.jpg" },
  { azonosito: 4, nev: "Nord Mini", marka: "OnePlus", ar: 159000, keszlet: 7, kep: "telefon4.jpg" },
  { azonosito: 5, nev: "Moto Max", marka: "Motorola", ar: 119000, keszlet: 10, kep: "telefon5.jpg" },
  { azonosito: 6, nev: "Xiaomi A", marka: "Xiaomi", ar: 99900, keszlet: 8, kep: "telefon6.jpg" },
  { azonosito: 7, nev: "Nokia C", marka: "Nokia", ar: 89900, keszlet: 11, kep: "telefon7.jpg" },
  { azonosito: 8, nev: "Honor Go", marka: "Honor", ar: 139000, keszlet: 5, kep: "telefon8.jpg" }
];

/* AI PROMPT (kiirUzenet):
Írj alap függvényt, ami egy id alapján megkeres egy elemet és a megadott szöveget kiírja innerHTML-lel.
Majd 3 másodperc után ürítse ki a dobozt. Ne használj rövid változóneveket.
*/
function kiirUzenet(celAzonosito, uzenetSzoveg) {
  var celElem = document.getElementById(celAzonosito);
  if (celElem == null) {
    return;
  }
  celElem.innerHTML = uzenetSzoveg;
  setTimeout(function() {
    celElem.innerHTML = "";
  }, 3000);
}

/* AI PROMPT (szamolReszletFizetes):
Készíts nagyon egyszerű részletkalkulátort:
teljesOsszeg = ar + (ar * kamatSzazalek/100), havi = teljesOsszeg / honapSzam.
Írd ki üzenetként a havi összeget.
*/
function szamolReszletFizetes(telefonAr, honapSzam, kamatSzazalek) {
  var teljesOsszeg = telefonAr + (telefonAr * (kamatSzazalek / 100));
  var haviDij = teljesOsszeg / honapSzam;
  kiirUzenet("jegyzet", "Havi díj: <b>" + Math.round(haviDij).toLocaleString("hu-HU") + " Ft</b>");
  return haviDij;
}

/* AI PROMPT (keresMarkaAlapjan):
Egyszerű szűrés ciklussal: ha a márka tartalmazza a megadott részletet (kisbetűsítve),
akkor tedd a találatot egy új tömbbe push segítségével.
*/
function keresMarkaAlapjan(lista, markaReszlet) {
  var talalatLista = [];
  var indexSzamlalo = 0;
  var markaKisbetusResz = String(markaReszlet).toLowerCase();
  while (indexSzamlalo < lista.length) {
    var aktualisTelefon = lista[indexSzamlalo];
    var aktualisMarkaKisbetus = String(aktualisTelefon.marka).toLowerCase();
    if (aktualisMarkaKisbetus.indexOf(markaKisbetusResz) !== -1) {
      talalatLista.push(aktualisTelefon);
    }
    indexSzamlalo = indexSzamlalo + 1;
  }
  return talalatLista;
}

/* AI PROMPT (osszegKeszletDb):
Összegezd össze egy ciklusban az összes telefon elérhető darabszámát (keszlet mező).
*/
function osszegKeszletDb(lista) {
  var darabOsszeg = 0;
  var indexSzamlalo = 0;
  while (indexSzamlalo < lista.length) {
    darabOsszeg = darabOsszeg + lista[indexSzamlalo].keszlet;
    indexSzamlalo = indexSzamlalo + 1;
  }
  return darabOsszeg;
}

/* AI PROMPT (legolcsobbTelefon):
Keresd meg a legalacsonyabb árú telefont (minimum keresés). Üres listánál térj vissza null-lal.
*/
function legolcsobbTelefon(lista) {
  if (lista.length == 0) {
    return null;
  }
  var legkisebbIndex = 0;
  var indexSzamlalo = 1;
  while (indexSzamlalo < lista.length) {
    if (lista[indexSzamlalo].ar < lista[legkisebbIndex].ar) {
      legkisebbIndex = indexSzamlalo;
    }
    indexSzamlalo = indexSzamlalo + 1;
  }
  return lista[legkisebbIndex];
}

/* AI PROMPT (epitsTelefonKartyak):
Írj egyszerű kártya HTML-t minden telefonhoz (kép, név, ár, márka, darab input, gomb).
A gomb a szamolReszletFizetes függvényt hívja meg.
*/
function epitsTelefonKartyak(celAzonosito, lista) {
  var celElem = document.getElementById(celAzonosito);
  if (celElem == null) {
    return;
  }
  var indexSzamlalo = 0;
  var kartyakSzoveg = "<div class='racs'>";
  while (indexSzamlalo < lista.length) {
    var t = lista[indexSzamlalo];
    kartyakSzoveg = kartyakSzoveg +
      "<div class='kartya'><div class='kartyaInner'>" +
        "<img src='" + t.kep + "' alt='" + t.nev + "' />" +
        "<h3>" + t.nev + "</h3>" +
        "<p class='kicsi'>Márka: " + t.marka + "</p>" +
        "<p class='kicsi'>Ár: " + t.ar.toLocaleString("hu-HU") + " Ft</p>" +
        "<div class='keresoSor'>" +
          "<input id='honap_" + t.azonosito + "' class='bemenet' type='number' min='3' value='12' style='width:80px' />" +
          "<input id='kamat_" + t.azonosito + "' class='bemenet' type='number' min='0' value='10' style='width:80px' />" +
          "<button class='gomb' onclick='szamolReszletFizetes(" +
            t.ar + ", Number(document.getElementById(\"honap_" + t.azonosito + "\").value), Number(document.getElementById(\"kamat_" + t.azonosito + "\").value)" +
          ")'>Részlet kalkuláció</button>" +
        "</div>" +
      "</div></div>";
    indexSzamlalo = indexSzamlalo + 1;
  }
  kartyakSzoveg = kartyakSzoveg + "</div></div>";
  celElem.innerHTML = kartyakSzoveg;
}
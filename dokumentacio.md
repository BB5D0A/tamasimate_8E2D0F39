# Projektmunka — Telefon Áruház (Tamási Máté)

## Téma
Telefon áruház weboldal, 8 készülékkel.

## Miről szól
Az oldalon márka szerint lehet keresni a kínálatban, kiírható az összes raktárkészlet, megjeleníthető a legolcsóbb készülék,
és gombnyomással részletfizetési összeget lehet számolni.

## Oldalak
- **Kezdőlap** (`index.html`) — rövid bemutatás, link az áruházhoz
- **Áruház** (`bolt.html`) — terméklista, keresés, statisztika, részletkalkuláció
- **Kapcsolat** (`kapcsolat.html`) — elérhetőség és üzenet gomb

## Használt technológiák
- **HTML/CSS:** kártyás megjelenítés, reszponzív rács, új színvilág
- **JavaScript (külön fájl: `script.js`)**

## Függvények működése részletesebben
- **kiirUzenet(celAzonosito, uzenetSzoveg)**  
  Megkeresi az elemet: `document.getElementById(celAzonosito)`.  
  Az üzenetet az `innerHTML`-be írja.  
  A `setTimeout` időzítő 3000 ms múlva törli a tartalmat.  
  *Beépített metódusok/tulajdonságok:* `getElementById`, `innerHTML`, `setTimeout`.

- **szamolReszletFizetes(telefonAr, honapSzam, kamatSzazalek)**  
  Kiszámítja a teljes összeget: `telefonAr + (telefonAr * (kamatSzazalek/100))`.  
  Ezt elosztja a hónapok számával: `haviDij = teljesOsszeg / honapSzam`.  
  Kiírja az eredményt `kiirUzenet` segítségével, `Math.round` és `toLocaleString("hu-HU")` alkalmazásával.  
  *Beépített metódusok/tulajdonságok:* `Math.round`, `toLocaleString`.

- **keresMarkaAlapjan(lista, markaReszlet)**  
  Létrehoz egy üres tömböt: `talalatLista = []`.  
  `while` ciklussal végigmegy a listán.  
  Kisbetűssé alakít: `.toLowerCase()`.  
  Részsztring-keresés: `.indexOf(...) !== -1`.  
  Találatot **`.push`**-sal tesz a `talalatLista` tömbbe.  
  *Beépített metódusok/tulajdonságok:* `toLowerCase`, `indexOf`, `push`.

- **osszegKeszletDb(lista)**  
  Elindítja `darabOsszeg = 0`.  
  `while` ciklusban hozzáadja minden elem `keszlet` értékét.  
  *Programozási tétel:* összegzés.

- **legolcsobbTelefon(lista)**  
  Üres listánál `null`.  
  `legkisebbIndex = 0`, majd `while` ciklusban minimumot keres az `ar` mező alapján.  
  *Programozási tétel:* minimum keresés.

- **epitsTelefonKartyak(celAzonosito, lista)**  
  Szöveg-összefűzéssel rakja össze a kártyák HTML-jét (kép, név, márka, ár, két bemenet a részlethez és egy gomb).  
  Az elkészült tartalmat `innerHTML`-be írja.  
  A gomb eseménye a `szamolReszletFizetes` függvényt hívja.  
  *Beépített metódusok/tulajdonságok:* `getElementById`, `innerHTML`.

## Megjegyzések
A képek fájlnevek szerint szerepelnek (telefon1.jpg … telefon8.jpg), helykitöltőként.

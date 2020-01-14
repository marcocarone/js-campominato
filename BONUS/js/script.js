var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;
var numeroUtente;
var trovato = false;
var livello;
var numeroMax;

livello = parseInt(prompt("Inserisci il livello di difficoltà: 0, 1 oppure 2"));
console.log(livello);

switch (livello) {
  case 0:
    numeroMax = 100;
    possibilita = 84;
    break;
  case 1:
    numeroMax = 80;
    possibilita = 64;
    break;
  case 2:
    numeroMax = 50;
    possibilita = 34;
    break;
  default:
    while (livello != 0 && livello != 1 && livello != 2 ) {
    livello = parseInt(prompt("Per favore inserisci il livello corretto di difficoltà: 0, 1 oppure 2"));
    }
}

// genero funzione numero random
function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// genero numeri random
for (var i = 0; i < 16; i++) {

  numeriRandom.push(generaNumeriRandom(1, numeroMax));
}
console.log("numeri random " + numeriRandom);
document.getElementById("numeri-random").innerHTML = numeriRandom;

// l'utente inserisce un numero per 84 tentativi
var x = 0;
while (x < possibilita && trovato == false) {
  if (livello == 0) {
    numeroUtente = prompt('Inserisci un numero da 1 a 100')
    console.log('Numero inserito: ' + numeroUtente);
  } else if (livello == 1) {
    numeroUtente = prompt('Inserisci un numero da 1 a 80')
    console.log('Numero inserito: ' + numeroUtente);
  } else if (livello == 2) {
    numeroUtente = prompt('Inserisci un numero da 1 a 50')
    console.log('Numero inserito: ' + numeroUtente);
  }

  for (var t = 0; t < numeriRandom.length; t++) {
    if (numeroUtente == numeriRandom[t]) {
      trovato = true;
    }
    if (trovato == true) {
      console.log("partita finita");
      document.getElementById("messaggio").innerHTML = "Partita finita. Hai beccato il numero nascosto";
    }
  }
  x++;
  punteggio++;
  console.log("punteggio" + punteggio);
  document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio;
}

console.log(" è stato trovato? " + trovato);

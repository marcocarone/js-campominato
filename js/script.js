var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;
var numeroUtente;
var trovato = false;

// genero funzione numero random
function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// genero numeri random
for (var i = 0; i < 16; i++) {
  numeriRandom.push(generaNumeriRandom(1, 100));
}
console.log("numeri random " + numeriRandom);
document.getElementById("numeri-random").innerHTML = numeriRandom;

// l'utente inserisce un numero per 84 tentativi


var x = 0;
while (x < possibilita && trovato == false) {
  numeroUtente = prompt('Inserisci un numero da 1 a 100')
  console.log('Numero inserito: ' + numeroUtente);
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

// CON UN PROMPT
// var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
//
// numeriUtente.push(numeroUtente);
// console.log("numeriUtente " + numeriUtente);
// tentativi = numeriUtente.length;
// console.log("numero tentativi primo prompt " + tentativi)
//
// var trovato = false;
// for (var i = 0; i < 16; i++) {
//   numeriRandom.push(generaNumeriRandom(1, 100));
//   if (numeroUtente == numeriRandom[i]) {
//     trovato = true;
//   }
// }
//
// if (trovato == true) {
//   console.log("partita finita");
// }

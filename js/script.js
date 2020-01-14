var numeriRandom = [];
var numeriUtente = [];
var tentativi = 0;
var possibilita = 84;


var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));

numeriUtente.push(numeroUtente);
console.log("numeriUtente " + numeriUtente);
tentativi = numeriUtente.length;
console.log("numero tentativi primo prompt " + tentativi)

var trovato = false;
for (var i = 0; i < 16; i++) {
  numeriRandom.push(generaNumeriRandom(1, 100));
  if (numeroUtente == numeriRandom[i]) {
    trovato = true;
  }
}

if (trovato == true) {
  console.log("partita finita");
}
// else {
//   z = 0;
//   while (z < 3){
//
//     numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
//     numeriUtente.push(numeroUtente);
//     console.log("numeriUtente " + numeriUtente);
//     tentativi = numeriUtente.length + 1;
//     console.log("numero tentativi ciclo " + tentativi);
//   z++
// }
//
// }

// } else {
//   i = 0;
//   while (i < 84){
//     numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
//     numeriUtente.push(numeroUtente[i]);
//     console.log("numeriUtente " + numeriUtente);
//     tentativi = numeriUtente.length + 1;
//     console.log("numero tentativi ciclo " + tentativi);
//     i++
//   }







console.log("numeri random " + numeriRandom);
console.log(" è stato trovato? " + trovato);




function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

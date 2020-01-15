var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;
var numeroUtente;
var trovato = false;
var livello;
var numeroMax;
var numeroMin;


// chiedo livello difficoltà
do {
  livello = parseInt(prompt("Inserisci il livello di difficoltà: 0, 1 oppure 2"));
  console.log(livello);
} while (livello != 0 && livello != 1 && livello != 2);

switch (livello) {
  case 0:
    numeroMin = 1;
    numeroMax = 100;
    possibilita = 84;
    var titoloDomanda = "Inserisci un numero da 1 a 100";
    break;
  case 1:
    numeroMin = 1;
    numeroMax = 80;
    possibilita = 64;
    titoloDomanda = "Inserisci un numero da 1 a 80";
    break;
  case 2:
    numeroMin = 1;
    numeroMax = 50;
    possibilita = 34;
    titoloDomanda = "Inserisci un numero da 1 a 50";
    break;
}


// genero numeri random
while (numeriRandom.length < 16) {
  //inserisco solo se il numero non è già presente nell'array
  var numeroCasuale = generaNumeriRandom(1, numeroMax);
  var cerca = presenteInArray(numeriRandom, numeroCasuale);
  if (cerca == false) {
    numeriRandom.push(numeroCasuale);
  }
}
console.log("numeri random " + numeriRandom);
document.getElementById("numeri-random").innerHTML = numeriRandom;



while (numeriUtente.length < possibilita && trovato == false) {
  // chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range

  numeroUtente = parseInt(prompt(titoloDomanda));
  richiedi();

  function richiedi() {
    while (controlloRangeNumeri(numeroMin, numeroMax, numeroUtente) == false) {
      numeroUtente = parseInt(prompt("Per favore inserisci un numero corretto: da 0  a " + numeroMax));
      console.log('Numero inserito: ' + numeroUtente);
      richiedi();
    }
  }

  // do {
  //   numeroUtente = parseInt(prompt(titoloDomanda));
  //   console.log('Numero inserito: ' + numeroUtente);
  // }
  // while (controlloRangeNumeri(numeroMin, numeroMax, numeroUtente) == false)


  if (presenteInArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
    // se il numero dell'utente è presente nelle numberBomb hai perso
    if (presenteInArray(numeriRandom, numeroUtente) == true) {
      console.log("partita finita");
      document.getElementById("messaggio").innerHTML = "Partita finita. Hai beccato il numero nascosto";
      trovato = true;
    } else {
      punteggio++;
    }
  }
}

console.log(" è stato trovato? " + trovato);
console.log("punteggio" + punteggio);
document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio;

if (numeriUtente.length == possibilita) {
  document.getElementById("messaggio").innerHTML = "Hai vinto la PARTITA senza lasciarci le penne!";
}

// FUNZIONI DELLO SCRIPT
// genero funzione numero random
function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che controlla che un numero sia in un certo range
function controlloRangeNumeri(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}

// funzione che cerca in un array
function presenteInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

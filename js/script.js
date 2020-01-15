var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 3;
var numeroUtente;
var trovato = false;

// genero numeri random
while (numeriRandom.length < 16) {
  //inserisco solo se il numero non è già presente nell'array
  var numeroCasuale = generaNumeriRandom(1, 100);
  var cerca = presenteInArray(numeriRandom, numeroCasuale);
  if (cerca == false) {
    numeriRandom.push(numeroCasuale);
  }
}
console.log("numeri random " + numeriRandom);
document.getElementById("numeri-random").innerHTML = numeriRandom;

// l'utente inserisce un numero per 84 tentativi


while (numeriUtente.length < possibilita && trovato == false) {
  // chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range

  numeroUtente = parseInt(prompt(titoloDomanda));
  richiediNumeroCorretto();


  // do {
  //   numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  //   console.log('Numero inserito: ' + numeroUtente);
  // }
  // while (controlloRangeNumeri(1, 100, numeroUtente) == false)


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

// richiedi numero corretto
function   richiediNumeroCorretto() {
  while (controlloRangeNumeri(1, 100, numeroUtente) == false) {
    numeroUtente = parseInt(prompt("Per favore inserisci un numero corretto: da 0  a 100" ));
    console.log('Numero inserito: ' + numeroUtente);
  }
}

// Un alert espone 5 numeri casuali.
// controllo per non far inserire numeri uguali nell'array
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var numeriRandom =  []; // array vuoto
while (numeriRandom.length < 5) { // ciclo 5 numeri tramite la funzione random
  var randomN = random(1, 100);
  if (numeriRandom.includes(randomN) == false) {
    numeriRandom.push(randomN); // pusho dentro l array
  }
}

console.log(numeriRandom);
alert('memorizza questi numeri: ' + numeriRandom); // creo alert con i numeri da memorizzare




var countdown = setTimeout(playGame,100); // aspetto 30 secondi e poi passo a funzione Playgame

var numeriUtente = []; // creo array vuoto per i numeri dell utente

function playGame() {
  alert('sono passati 30 secondi');
  for (var i = 0; i < 5; i++) {
      var inserisciNumeroUtente = parseInt(prompt('inserisci il numero' + (i + 1)));
      if (numeriRandom.includes(inserisciNumeroUtente)) {
        numeriUtente.push(inserisciNumeroUtente); // pusho in array numeriutente
      }
    }
    alert(numeriUtente + ' hai indvinato ' + numeriUtente.length + ' numeri'); // stampo i numeri che ho inserito
}



function random(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

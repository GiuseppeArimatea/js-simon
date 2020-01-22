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



var numeriUtente = []; // creo array vuoto per i numeri dell utente

var countdown = setTimeout(playGame,30000); // aspetto 30 secondi e poi passo a funzione Playgame


function playGame() {
  alert('sono passati 30 secondi');
  while (numeriUtente.length < 5) { //chiedo 5 numeri
      var inserisciNumeroUtente = parseInt(prompt('inserisci il numero'));
      if (numeriUtente.includes(inserisciNumeroUtente)) { 
        numeriUtente.push(inserisciNumeroUtente); // pusho in array numeriutente
      }
    }
    alert('hai inserito i n. ' + numeriUtente); // stampo i numeri che ho inserito

   var trovati = 0; // creo variabile che conta quanti numeri ho trovato
   var numeriTrovati = []; // creo array numeriTrovati

   for (var i = 0; i < numeriRandom.length; i++) { // attraverso array numeriRandom
     if (numeriRandom.includes(numeriUtente[i])) {  // Il metodo includes() determina se un array include un certo elemento
       trovati++; // se numeriRandom trova delle coppie con numeriUtente aumento Variabile trovati  e pusho in numeriTrovati e stampo tramite Alert
       numeriTrovati.push(numeriUtente[i]);
       console.log(numeriTrovati);
     }
   }
   return alert('Ne hai trovati ' + trovati +'! i numeri sono: ' + '' + numeriTrovati)
}



function random(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

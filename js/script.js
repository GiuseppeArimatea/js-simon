// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
//

var numeriRandom = []
var numeri = random(1,100);
alert(numeriRandom);
console.log(numeriRandom);

var timer = 30;
var countdown = setInterval(countdownScore,1000);


function countdownScore() {
  if (timer == 0) {
    alert('adesso devi inserire i numeri');
    for (i = 0; i < 5; i++) {
      var inserisciNumero = parseInt(prompt("inserisci un numero"));
    }
  } else {
    timer--;
  }
  console.log(countdown, 'Timer' , timer);
}



function random(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  for (var i = 0; i < 5; i++) {
  var random = numeriRandom.push(Math.floor(Math.random() * (max - min + 1))) + min }
  return random;
}

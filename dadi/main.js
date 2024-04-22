// DADI

// Genera due numeri random tra 1 e 6 (inclusi), uno per il giocatore e uno per il computer.
// Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.

// creo due variabili non definite per i due giocatori 
let playerOne;
let playerTwo;

// assegno alle variabili dei giocatori dei numeri random da 1 a 6 compresi
playerOne = Math.floor(Math.random()*6+1);
playerTwo = Math.floor(Math.random()*6+1);
console.log(playerOne);
console.log(playerTwo);

// creo un if che andrà a controllare quale dei due giocatori ha il numero più alto e stamperò il nome del vincitore, se i numeri saranno uguali stamperò pareggio
if (playerOne > playerTwo) {
    console.log(`Player One è il vincitore`);
} else if (playerOne < playerTwo) {
    console.log(`Player Two è il vincitore`);
} else {
    console.log(`I numeri sono uguali "Pareggio"`)
}



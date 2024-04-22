// MAIL


// Chiedi all’utente la sua email per poi controllare che sia nella lista di chi può accedere.


// Stampa un messaggio SOLO SE l'utente è in lista.


// creo array con lista di mail
const adminMailingList = [
    "prova@gmail.com",
    "email@gmail.com",
    "davide@gmail.com"
];

// chiedo all'utente di inserire la sua mail e la salverò in una variabile
const userEmail = prompt(`inserisci email`);

// controllo tramite ciclo e if che la email sia inserita o meno nell'array e stampo il risultato vero o falso

for (let i = 0; i < adminMailingList.length; i++) {
    const mailingSelected = adminMailingList[i];
    if (mailingSelected == userEmail){
        console.log(`La mail è nella lista`);
    }
}


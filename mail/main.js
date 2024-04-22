// MAIL


// Chiedi all’utente la sua email per poi controllare che sia nella lista di chi può accedere.


// Stampa un messaggio SOLO SE l'utente è in lista.


// // creo array con lista di mail
const adminMailingList = [
    "prova@gmail.com",
    "email@gmail.com",
    "davide@gmail.com"
];

// chiedo all'utente di inserire la sua mail e la salverò in una variabile
const userEmail = prompt(`inserisci email`);

// imposto variabile per l'email trovata su false
let emailFound = false;

// controllo tramite ciclo e if che la email sia inserita o meno nell'array 
for (let i = 0; i < adminMailingList.length; i++) {
    // se la mail è nell'array riassegno la variabile emailFound come vera
    if (adminMailingList[i] == userEmail){
        emailFound = true;
    } 
}

// controllo se la mail è stata trovata e stampo il risultato
if (emailFound == true) {
    console.log(`La tua mail è nell'elenco`)
} else {
    console.log(`La tua mail non è nell'elenco`)
}










// // Array di email fittizie
// const elencoEmail = ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com', 'email5@example.com'];

// // Chiedi all'utente di inserire la sua email
// const emailUtente = prompt('Inserisci la tua email:');

// // Variabile per tenere traccia se l'email è stata trovata
// let emailTrovata = false;

// // Ciclo per controllare se l'email dell'utente è contenuta nell'array
// for (let i = 0; i < elencoEmail.length; i++) {
//     if (elencoEmail[i] === emailUtente) {
//         emailTrovata = true;
//         // break; // Esci dal ciclo se trovi l'email
//     }
// }

// // Verifica se l'email è stata trovata e stampa il risultato
// if (emailTrovata) {
//     console.log('La tua email è contenuta nell\'array.');
// } else {
//     console.log('La tua email non è contenuta nell\'array.');
// }





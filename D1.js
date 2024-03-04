/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 


Immaginiamo che JavaScript sia una grande cesta dove andiamo ad inserire i nostri giocattoli che possiamo anche chiamare datatype;

Nella cesta iniziamo ad inserire dei cubi con sopra scritti dei caratteri alfabetici, ovvero ci sono disegnate delle lettere, inutie possono completare delle frasi o parole,
bene queste noi le chiameremo STRINGHE, sono i nostri primi datatype.

Successivamente inseriamo dei cubi con sopra invece disegnati dei caratteri numerici, ovvero dei numeri, questi li chiameremo proprio NUMERI, sono i nostri secondi datatype.

Dopo, essendo amanti del calcio, inseriamo due cartellini un rosso e un giallo, siamo a conoscenza che quei cartellini possono essere solo rosso e giallo e niente altro, 
bene questi noi gli chiamiamo BOOLEANI, sono i nostri terzi datatype, possono essere solo true or false insomma.

Se guardiamo bene nella cesta possiamo vedere che dopo aver inserito le varie cose rimagono degli spazi vuoti, bene gli spazi vuoti gli andiamo a chiamare Null ed è il 
nostro quarto datatype.

Mentre il quinto datatype, che noi chiamiamo UNDEFINED, noi lo possiamo considerare come gli spazi vuoti si ma in cui non abbiamo ancora deciso cosa metterci dentro.


*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es2 = "Esercizio 2";
console.log(Es2);
let myName = "Luca";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es3 = "Esercizio 3";
console.log(Es3);
let n1 = 12;
let n2 = 20;
console.log(n1 + n2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es4 = "Esercizio 4";
console.log(Es4);
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es5 = "Esercizio 5";
console.log(Es5);
myName = "Dipietro";
console.log(myName);
const myNickname = "Dip o Dipo o Dipie";
console.log(myNickname);
// myNickname = "Dipe";
// console.log(myNickname);
// Togliessimo i due tratti, che ci permettono di commentare in JS, potremo verificare come in un variabile dichiarata con la keywords const non si possa cambiare valore.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es6 = "Esercizio 6";
console.log(Es6);
console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Es7 = "Esercizio 7";
console.log(Es7);
let name1 = "jhon";
let name2 = "Jhon";
console.log(name1);
console.log(name2);
console.log(name1 === name2);
console.log(name1 !== name2);
let Ex = "Extra Esercizio 7";
console.log(Ex);
name1.toLowerCase === name2.toLowerCase;
console.log(name1.toLowerCase === name2.toLowerCase);

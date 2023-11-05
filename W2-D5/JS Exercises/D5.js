/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

// RISPOSTA 1

//versione 1

for (let index = 0; index < pets.length; index++) {
  const dog = pets[index];
  console.log(dog)
}

//versione 2

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// RISPOSTA 2

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// RISPOSTA 3

// versione 1 
{
  for (index = (pets.length-1); index > -1; index--) {
    var poppi = pets[index];
    console.log(poppi);
  }

}
//versione 2
{
  let step = pets.reverse()
  console.log(step)
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// RISPOSTA 4

{
  let pet1 = pets.shift();
  pets.push(pet1);
  console.log(pets);
}
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [{
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'stylee', 'r-line'],
  },
]

// RISPOSTA 5

for (let index = 0; index < cars.length; index++) {
  const licensePlate = "licensePlate";
  cars[index][licensePlate] = "x00" + index;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const NewCar = {
  brand: 'Gutamaya',
  model: 'Eagle',
  color: 'white',
  trims: ['Eaglina', 'Super', 'Top'],
  licensePlate: 'x003'
};
cars.push(NewCar);
console.log(cars);

for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let index = 0; index < cars.length; index++) {
  const trims2 = cars[index].trims[0];
  if (trims2.length > 0) {
    justTrims.push(trims2);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let index = 0; index < cars.length; index++) {
  if (cars[index].color.slice(0, 1) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  };
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

var index = 0;
while (index < numericArray.length && numericArray[index] !== 66) {
  console.log(numericArray[index]);
  index++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const NumberArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i]; // Trasforma il carattere in minuscolo
  let pos;

  switch (character) {
    case 'a':
      pos = 1;
      break;
    case 'b':
      pos = 2;
      break;
    case 'c':
      pos = 3;
      break;
    case 'd':
      pos = 4;
      break;
    case 'e':
      pos = 5;
      break;
    case 'f':
      pos = 6;
      break;
    case 'g':
      pos = 7;
      break;
    case 'h':
      pos = 8;
      break;
    case 'i':
      pos = 9;
      break;
    case 'j':
      pos = 10;
      break;
    case 'k':
      pos = 11;
      break;
    case 'l':
      pos = 12;
      break;
    case 'm':
      pos = 13;
      break;
    case 'n':
      pos = 14;
      break;
    case 'o':
      pos = 15;
      break;
    case 'p':
      pos = 16;
      break;
    case 'q':
      pos = 17;
      break;
    case 'r':
      pos = 18;
      break;
    case 's':
      pos = 19;
      break;
    case 't':
      pos = 20;
      break;
    case 'u':
      pos = 21;
      break;
    case 'v':
      pos = 22;
      break;
    case 'w':
      pos = 23;
      break;
    case 'x':
      pos = 24;
      break;
    case 'y':
      pos = 25;
      break;
    case 'z':
      pos = 26;
      break;
    default:
      pos = 'Non trovato';
  }

  NumberArray.push(pos);
}

console.log(NumberArray);
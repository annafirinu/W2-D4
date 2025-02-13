/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const basePerAltezza = l1 * l2;
  console.log("Il risultato è: ", basePerAltezza);
  return basePerAltezza;
};
area(5, 10);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (l1, l2) {
  if (l1 !== l2) {
    const case1 = l1 + l2;
    console.log("Sono diversi, il risultato è: ", case1);
    return case1;
  } else {
    const case2 = (l1 + l2) * 3;
    console.log("Sono uguali, il risultato è: ", case2);
    return case2;
  }
};

crazySum(Math.floor(Math.random() * 10), Math.floor(Math.random() + 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (l1, l2 = 19) {
  if (l1 > 19) {
    const case1 = Math.abs(l1 - l2) * 3;
    console.log("l1 è maggiore di 19, il risultato è ", case1);
    return case1;
  } else {
    const case2 = Math.abs(l1 - l2);
    console.log("l1 è minore o uguale a 19, il risultato è: ", case2);
    return case2;
  }
};
crazyDiff(17);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    const number = true;
    console.log(number);
    return number;
  } else {
    const number1 = false;
    console.log(number1);
    return number1;
  }
};

boundary(Math.floor(Math.random() * 1000));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n % 3 === 0 || n % 7 === 0) {
    const n1 = true;
    console.log(n1);
    return n1;
  } else {
    const n2 = false;
    console.log(n2);
    return n2;
  }
};

check3and7(Math.floor(Math.random() * 1000));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (name) {
  const name1 = name.replace(name, "Sostituzione");
  console.log(name1);
  return name1;
};

reverseString("ciao");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperfirst = function (name) {
  const name1 = name.charAt(0).toUpperCase() + name.slice(1, 4);
  const name2 = name.charAt(5).toUpperCase() + name.slice(6, 6);
  const name3 = name.charAt(7).toUpperCase() + name.slice(8, 12);
  const str = name1 + " " + name2 + " " + name3;
  console.log(str);
};
upperfirst("ciao a tutti");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (name) {
  const name1 = name.slice(1, 21);
  console.log(name1);
};
cutString("Ciao a tutti sono Anna");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

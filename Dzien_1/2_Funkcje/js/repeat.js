
// ### Zadanie A1
// Stwórz funkcję, która zwraca (przez ```return```) sumę trzech liczb. Liczby powinny być przekazane do funkcji jako argumenty.
//
// Przykład:
// ```
// input -> 1, 2, 3
// output -> 6
// ```
const sum_arguments = (a, b, c) => {
  return a + b + c
}
//console.log(Sum_arguments(2,5,'123'));


const sumArguments = (...args) => [...args].reduce((a, b) => a + b, 0)        // wrzucilem 3 roziwazania z dwolona iloscia argumentow.
                                                                            // ktore bedzie stosowane i jest najbardziej czytelne    

/*
To jest dokładnie to co bym napisał. Bardzo fajnie. Wychodzimy z założenia, że osoby
czytające kod się znają na tym. I to jest stosowane najczęściej w nowoczesnym JS.

Tak na marginesie - bo to jest tak zway OneLiner, tez nie zawsze o to chodzi, żeby funkcje napisać 
jak najkrócej za wszelką cenę. Czasem dobrze jest ją rozbudować, ładnie opisać zmiennymi. Dodać 
jakieś defensywne If itp
Ale akurat w takiej prostej operacji One Liner jest idealny
*/


console.log('Sum of arguments equls ' + sumArguments(1, 2, 3, 4))

const sumArguments2 = function () {
  return Array.prototype.reduce.call(arguments, function (a, b) {
    return a + b;
  }, 0);
}
console.log('Sum of arguments equls ' + sumArguments2(1, 2, 3, 4, '123'))

const sum = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];

  } return result
}
console.log('Sum of arguments equls ' + sum(1, 2, 3, 4, '123'))
// ### Zadanie A2
// Napisz funkcję liczącą pole i obwód okręgu. Funkcja przyjmuje promień tej figury geometrycznej jako argument.
// Jeśli przekazany argument jest nieodpowiedniego typu, to funkcja ma zwrócić `false`.

const Calculate_circle = (radious) => {
  return Math.PI * radious ** 2


}
console.log(Calculate_circle(4));
//
// ## Część B &ndash; zadania do rozwiązania samodzielnego
//
// ### Zadanie B1
// Stwórz funkcję anonimową i przypisz ją do zmiennej.
//Zadaniem funkcji jest wypisanie dziesięć razy:
//"Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".
const anonim = () => {
  var i = 1
  while (i <= 10) {
    console.log('Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych"');
    i++
  }
}
anonim();
// ### Zadanie B2
// Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
// * kwotę do zapłaty,
// * opis słowny obsługi.
// Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash;
// funkcja powinna zwracać napis "Opis nieczytelny".
//
// Opis może przyjmować następujące wartości:
// "Bardzo dobra obsluga" => 25% napiwku,
// "Dobra obsluga" => 20% napiwku,
// "Srednia obsluga" =>15% napiwku,
// "Zla obsluga" => 0% napiwku.
const calculateTip = (amount, rating) => {
  var result = 0
  switch (rating) {
    case 'Bardzo dobra obsluga':
      result = 0.25 * amount
      break;
    case 'Dobra obsluga':
      result = 0.20 * amount
      break;
    case 'Srednia obsluga':
      result = 0.15 * amount
      break;
    case 'Zla obsluga':
      result = 0
      break;
    default:
      result = 'Nie rozumiem'
      break;

  }return 'Napiwek :' + result


}
console.log(calculateTip(120, 'Srednia obsluga'));
console.log(calculateTip(1232, 'Bardzo dobra obsluga'));
console.log(calculateTip(1232, 'spierdalaj'));
// Przykład:
// ```
// input -> 100, "Bardzo dobra obsluga"
// output -> 25
// ```

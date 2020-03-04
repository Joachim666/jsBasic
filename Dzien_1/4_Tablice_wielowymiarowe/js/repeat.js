// <img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">
//
// # JavaScript &ndash; zadania
// # Tablice wielowymiarowe
//
// Zadania powinny być rozwiązane w pliku **app.js**.
// Oddzielaj zadania komentarzami. Pisz czytelny i dobrze sformatowany kod.
//
// ## Część A &ndash; zadanie do rozwiązania z wykładowcą
//
// ### Zadanie A1
// Napisz funkcję ```checkArray``` przyjmującą jako argument tablicę dwuwymiarową z liczbami całkowitymi.
// Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą wartości boolean ```true``` lub ```false```, zależne od tego,
// czy każdy element tablicy drugiego wymiaru jest parzysty.
const checkArray2 = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let isOdd = array[i].some((element) => element % 2 !== 0) // czy najpierw powinienem zainicjowac zmienna isOdd ? Tutaj odrazu przypisanie do wartosci
    result.push(!isOdd)

  } return result

}

//Idąc ideą Clean Code, ja bym to zrobił w taki sposób: 
const isOdd = (number) => number % 2 === 0;
const allArrayItemsAreOdd = (array) => array.every((element) => isOdd(element));

const checkArray = (twoDimensionArray) => {
  return twoDimensionArray.map((array) => allArrayItemsAreOdd(array))             // o wiele bardziej czytelniejsze
};
/*
ogólnie taka jest idea Clean Code, rozbijać jak najwięcej rzeczy na mniejsze funkcje. 
Jedna funkcja powinna idealnie robić jedną rzecz. Tak samo idealnie jak funkcja przyjmuje maksymalnie
jeden argument. I po nazwie wiemy co powinna zwracać. Czyli np isOdd(number) po nazwie możemy stwierdzić, że zwróci
boolean. checkArray -> jak oni proponują jest mało czytelne. Bo co ma check? Co ma zwrócić? Unika się takich nazw.
Tasiemce typu checkIfArrayRowsContainOnlyOddNumbers(array) nie są niczym nadzwyczajnym :) Im więcej nazwa mówi tym lepiej.
Ja np wczoraj dwie godziny się zastanawiałem jak nazywać zmienne i funkcje klas w jednym z workerów nad którym pracuje.
*/




// ```JavaScript
var arr = [
  [11, 12],
  [42, 2],
  [-4, -120],
  [0, 0],
  [1, 34],
];
console.log(checkArray(arr));
//
// output
//
// var arrayCheck = [
// false, // bo 11
// true,
// true,
// true,
// false, // bo 1
// ];
//
// ### Zadanie B1
// Napisz funkcję ```print2DArray```, która jako argument przyjmuje tablicę dwuwymiarową.
//Następnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.
const print2DArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].forEach((element) =>
      console.log(element))
  }
}
print2DArray([
  [11, 12],
  [42, 2],
  [-4, -120],
  [0, 0],
  [1, 34],
])
//
// ### Zadanie B3
// Napisz funkcję ```create2DArray``` przyjmującą dwie liczby całkowite (```rows``` i ```columns```).
// Zadaniem funkcji jest zwrócenie tablicy dwuwymiarowej o podanej liczbie rzędów i kolumn.
// Każda komórka ma być wypełniona kolejną liczbą całkowitą.
// Nastepnie użyj rozwiązania z zadania B1 do wypisania tej tablicy w konsoli.
// Hint: Użyj petli zagnieżdżonych.

const create2DArray = (rows, columns) => {
  let table = []
  for (let i = 0; i < rows; i++) {
    table[i] = []                              //posilkowalem sie roziwazaniami z neta (petla w petli troche jest to dla mnie abstrakcja :D).
    // co oznacza to table[i]=[] ? Czy to jest inijacja drugiego wymariu ?
    for (let j = 0; j < columns; j++) {    //Generalnie staraj się unikać pętli w pętli. Im więcej zagnieżdżeń tym gorzej
      table[i][j] = i + ',' + j             //Spada czytelność kodu, sam widzisz, że ciężko jest to skumać.
    }                                       // table[i]=[] oznacza, że w table tworzysz na pozycji [i] pustą tabelę. Po stworzeniu pustej 
  } return table                           //tabeli zasilasz ją wartościami
}                 //generalnie straszny antypattern :D Rozbiłbym to na mniejsze funkcje

console.log(create2DArray(5, 5));

const createArray = (rows) => {
  let array=[]
  for (let i = 0; i < rows; i++) {
    array.map((element) => array[i])
    
  }return array
 }
 console.log(array(3))

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
const checkArray=(array)=>{
  let result=[];
  for (let i = 0; i < array.length; i++) {
    let isOdd=array[i].some((element)=> element %2 !==0) // czy najpierw powinienem zainicjowac zmienna isOdd ? Tutaj odrazu przypisanie do wartosci
    result.push(!isOdd)

  }return result

}

// ```JavaScript
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];
// console.log(checkArray(arr));
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
const print2DArray=(array)=> {
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

const create2DArray=(rows,columns)=> {
  let table=[]
  for (let i = 0; i < rows; i++) {
    table[i]=[]                              //posilkowalem sie roziwazaniami z neta (petla w petli troche jest to dla mnie abstrakcja :D).
                                            // co oznacza to table[i]=[] ? Czy to jest inijacja drugiego wymariu ?
     for (let j = 0; j < columns; j++) {
      table[i][j] = i + ',' + j
    }
  }return table
}

console.log(create2DArray(5,5));
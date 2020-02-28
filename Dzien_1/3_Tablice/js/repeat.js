
//
// ### Zadanie A1
// Zajrzyj do pliku **zadanieA1.js** &ndash; jest tam napisany szkielet funkcji przyjmującej tablicę.
//Dopisz ciało funkcji w taki sposób, żeby zwracać ```true``` (wartość booleanowską), kiedy tablica ma
//liczby rosnące (każda następna jest większa od poprzedniej), a ```false``` &ndash; jeżeli nie.
// Pamiętaj, żeby użyć słowa kluczowego ```return``` do zwracania danych z funkcji.
const isNumbersGrowing=(array)=> {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]){
      return false
    }
  }return true

}

console.log("tablica [1,2,3,4,5,6,7]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([1,2,3,4,5,6,7]));
console.log("tablica [1,2,10,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([1,2,10,4,5,6,7]));
console.log("tablica [-5,-4,0,4,6,21]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([-5,-4,0,4,6,21]));
console.log("tablica [-1,2,-1,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([-1,2,-1,4,5,6,7]));
console.log("tablica [8]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([8]));
// ### Zadanie A2
// Napisz dwie funkcje ```add(array)``` i ```multiply(array)```.
// Obie mają przyjmować tylko jeden argument &ndash; tablicę. Następnie funkcja ```add```
//  ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli **for**),
//  a funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli **for**).
const add=(array)=>{
  let result=0;
  for (let i = 0; i < array.length; i++) {
    result +=array[i]
  }return result

}
console.log(add([1,2,3,4,5])))
//W tych zadaniach widać np siłę funkcji jak map, reduce, filter
//to samo można zapisać jako:
const add = (array) => array.reduce((a, b) => a + b);
const multiply = (array) => array.reduce((a, b) => a * b);
//dużo czystsze i w praktyce tak się to stosuje. 

const multiply=(array)=>{
  let result=1
  for (let i = 0; i < array.length; i++) {
    result*=array[i]
  }
  return result
}
console.log(multiply([1,2,3,4]));
// ### Zadanie A3
// Napisz funkcję ```distFromAverage```, która ma przyjmować jako argument tablicę z liczbami.
// Zwracana przez funkcję tablica ma przedstawiać w kazdej komórce różnicę między liczbą z danej komórki a
//  średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.
// // Np.
// ```
const distFromAverage=(array)=> {
    let resul=[]
    let average_value= Math.floor(add(array)/array.length)
    for (let i = 0; i < array.length; i++) {
      resul.push(Math.abs(array[i] - average_value))
    }
    return resul
}

//tu też fajnie wchodzi map
const distanceFromAverage = (array) => {
  const averageValue = calculateArrayAverage(array); //tu bym zrobił funkcję dodatkową. Generalnie funkcje powinny 
  //być jak najmniejsze i odpowiadać za jedną rzecz. Im więcej rozbijasz tym łatwiej utrzymać kod
  return array.map((element) => Math.abs(element - averageValue));
}

console.log(distFromAverage([1,2,3,4,5,6,7]))// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1,1,1,1])); //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage([2,8,3,7])) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)
// ```
//
// ## Część B &ndash; zadania do rozwiązania samodzielnego
//
// ### Zadanie B1
// Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
// 1. Wypisz pierwszy owoc w konsoli.
// 2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
// 3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).

const last_fruit=(array)=>{
  console.log(array[array.length-1])
  console.log(array.length);
}

const first_fruit=(array)=>{
  console.log(array[0]);
}
const fruits_foreach=(array)=>{
  array.forEach(function(element,index,array)  {
    console.log(element);
})
}

fruits_foreach(['apple','strawberry','pear','banana']);
last_fruit(['apple','strawberry','pear','banana']);
first_fruit(['apple','strawberry','pear','banana']);

// ### Zadanie B2
// Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr &ndash; tablicę. Następnie przy pomocy
//pętli **for** przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.
const printTable=(array)=> {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }

}
printTable(['apple','strawberry','pear','banana'])
//
// ### Zadanie B3
// Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**.
// Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej).
// Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.
const factors=(num)=> {
  let result=[]
  if (num <0) {
    return []
  } for (var i = 0; i <=num; i++) {
      if (num % i ==0){
        result.push(i)
      }
  }return result.sort(function(a,b){
      return b-a
  })

}
console.log(factors(2)) //=> [2, 1]
console.log(factors(54)) //=> [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4)) //=> []
// ```
//
// ### Zadanie B4
// Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash;
//tablicę zawierającą rosnące liczby całkowite.
//Funkcja ta ma zwracać brakującą liczbę (przez co tablica skacze o dwa zamiast o jeden).
//Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.
const getMissingElement=(array)=> {
  for (let i = 0; i < array.length-1; i++) {

  if (array[i]+1 !==array[i+1]) {
    return array[i]+1
  }
}
  return null

}
console.log(getMissingElement([1,2,3,4,5,6,7])) //=> null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15])) //=> 9
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4])) //=> -1
// ```
//
//
// ## Zadanie B5 &ndash; dodatkowe
// Stwórz tablicę zawierającą w w każdej komórce rok urodzenia.
//Następnie napisz funkcję, która przyjmie tę tablicę jako argument i wyświetli:
// * rok urodzenia najstarszej osoby i jej wiek,
// * rok urodzenia najmłodszej osoby i jej wiek.
// Użyj pętli do iteracji tablicy, ale postaraj się pobierać elementy metodą ```pop``` lub ```shift```.
const getBirthDay=(array)=>{
  const current_year=2020;
  array.sort((a,b)=> b-a)  //czy tak to sie robi ?
  console.log(array);
  let oldest = array.pop()
  let youngest = array.shift()

  return {'Rok urodzenia najstarszej osoby': oldest,
          'Wiek najstarszej osoboy': current_year- oldest + ' lat',
          'Rok urodzenia najmlodszej osoby': youngest,
          'Wiek najmlodszej osoby': current_year-youngest + ' lat'

  }
}

console.log(getBirthDay([1991,2000,1968,2004,1999]));

// ### Zadanie 1
//
// Za pomocą prototypu dodaj metodę ```upperLower``` do wbudowanego w JavaScript obiektu ```String```.
//Metoda zamieni podany ciąg znaków tak,
//że każdy znak nieparzysty w wyrazie będzie zamieniony na mała literę, a parzysty &ndash; na duża.
// Jeśli w ciągu występuje spacja, pomiń ją.
// Po rozwiązaniu zadania pomyśl, czy można funkcję zapisać w inny, łatwiejszy sposób.
const upper_lower_string = (my_string) => {
  var result = ''
  for (var i = 0; i < my_string.length; i++) {
    if (i % 2 === 0) {
      result += my_string[i].toLowerCase()
    } else {
      result += my_string[i].toUpperCase()
    }
  } return result

}
String.prototype.upperLower = function () {

  var charsArray = this.split(' ');

  var result = []
  for (var i = 0; i < charsArray.length; i++) {

    result.push(upper_lower_string(charsArray[i]))


  } return result.join(' ')
}

//tests
let funnyText = "Smiesznie".upperLower()
console.log(funnyText)
let funnyTextWithSpace = "Javascript jest super".upperLower();
console.log(funnyTextWithSpace);

// ### Zadanie 2
// Stwórz obiekt `samochód`, utwórz dla niego odpowiednie atrybuty i metody.
// ##### Atrybuty:
// 1. markę,
// 2. kolor,
// 3. liczbę przejechanych kilometrów (na początku **0**).
// ##### Metody:
// 1. ```printCarinfo()``` &ndash; metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
// 2. ```drive(km)``` &ndash; która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
//
// ### Zadanie 3
// Do obiektu `samochód` z zadania 2. dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu.
// Dodaj też następujące metody:
//  1. metodę dodającą wpis do tej tablicy,
//  2. metodę wyświetlającą wszystkie przeglądy samochodu.
//
// Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
//

const Car = function (brand, color) {
  this.brand = brand
  this.color = color
  this.km = 0
  this.dates = []
}

Car.prototype.printCarinfo = function () {
  console.log(this.color + " " + this.brand + ' drives: ' + this.km + ' km');

}

Car.prototype.drive = function (km) {
  this.km += km
}

Car.prototype.dateList = function (date) {
  this.dates.push(date)

}

Car.prototype.showDateList = function () {
  console.log('Car review dates: ' + this.dates);

}


//test
let audi = new Car('Audi', 'Black')
audi.printCarinfo()
audi.drive(120)
audi.printCarinfo()
audi.dateList('23-02-2009')
audi.dateList('23-07-2019')
audi.dateList('23-09-2016')
audi.showDateList()




// ### Zadanie 4
// W pliku **zadanie04.js** możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.
// Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
// Utwórz kilka robotów i sprawdź, czy w napisanym kodzie nie ma błędów.
//
// ### Zadanie 5
//
// Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
// Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//   1. ```getArea()``` &ndash; metoda ma zwracać pole powierzchni,
//   2. ```getPerimiter()``` &ndash; metoda ma zwracać obwód.
//
// Stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.
const Rectangle = function (lenght, width) {
  this.lenght = lenght
  this.width = width
}
Rectangle.prototype.getArea = function () {

  return this.lenght * this.width
}
Rectangle.prototype.getPerimiter = function () {


  return 2 * this.lenght + 2 * this.width
}

let rectangl1 = new Rectangle(5, 9)
console.log('Area of rectangle with width ' + rectangl1.width + ' and lenght ' + rectangl1.lenght + ' = ' + rectangl1.getArea());

console.log('Perimiter of rectangle with width ' + rectangl1.width + ' and lenght ' + rectangl1.lenght + ' = ' + rectangl1.getPerimiter());
let rectangl2 = new Rectangle(15, 19)
console.log(rectangl2.getArea());
console.log(rectangl2.getPerimiter());
let rectangl3 = new Rectangle(10, 10)
console.log(rectangl3.getArea());
console.log(rectangl3.getPerimiter());
//
// ### Zadanie 6
//
// Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych.
//Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
// Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//   1. ```add(num1, num2)``` &ndash; metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis:
//"added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
//   2. ```multiply(num1, num2)``` &ndash; metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać
//napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
//   3. ```subtract(num1, num2)``` &ndash; metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać
//napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
//   4. ```divide(num1, num2)``` &ndash; metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma
//zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
//   5. ```printOperations()``` &ndash; metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
//   6. ```clearoperations()``` &ndash; metoda ma wyczyścić wszystkie operacje z pamięci.


const Calculator = function () {  // przy inicjacji objektu nie dziala const Calculator =() =>{...} czemu ? jak to stosowac
  this.history = []
}
Calculator.prototype.add = function (num1, num2) {             //tutaj tez skladnia =()=> . Obiektowo to nie dziala ?
  let result = num1 + num2
  this.history.push('added ' + num1 + ' to ' + num2 + ' got ' + result)
  return result
}
Calculator.prototype.multiply = function (num1, num2) {
  let result = num1 * num2
  this.history.push('multiplied ' + num1 + ' with ' + num2 + ' got ' + result)
  return result
}
Calculator.prototype.subtract = function (num1, num2) {
  let result = num1 - num2
  this.history.push('subtracted ' + num1 + ' from ' + num2 + ' got ' + result)
  return result
}
Calculator.prototype.divide = function (num1, num2) {
  let result = num1 / num2
  this.history.push('divided ' + num1 + ' by ' + num2 + ' got ' + result)
  return result
}
Calculator.prototype.printOperations = function () {
  this.history.forEach((element) => {
    console.log(element);
  });
}
Calculator.prototype.clearoperations = function () {
  this.history = []
  return this.history
}
//test
let myCalculator = new Calculator()
myCalculator.add(123, 54)
myCalculator.subtract(99, 9999)
myCalculator.multiply(34, 72)
myCalculator.divide(123, 0)
// myCalculator.printOperations()
console.log(myCalculator.clearoperations());
myCalculator.printOperations()

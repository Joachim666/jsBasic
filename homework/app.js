
// ### Zadanie 1
// Napisz funkcję ```getNumber```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

// ```JavaScript
const getNumber = (number, array) => {
    return array.includes(number)             // dlaczego nie dziala return number in array
}

//powinno działać number in array , ale includes jest chyba optymalniejsze

console.log(getNumber(2, [33, 54, 2, 1, 4, 100])) //=> true
console.log(getNumber(5, [33, 4, 2, 1, 4, 100])) //=> false
// ```


// ### Zadanie 2
// Napisz funkcję ```createIdentityMatrix```, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych ```rows``` i ```columns```. 
//Niech funkcja **zwraca** tablicę 2-wymiarową. Niech tablica wygląda w następujący sposób:

// ```JavaScript
// createIdentityMatrix(4,4) =>
// [ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
//  ```
// Jest to tak zwana macierz jednostkowa, czyli taka, która ma na przekątnej jedynki. Musisz użyć pętli zagnieżdżonych. Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.

// ### Zadanie 3
// Za pomocą kontruktora stwórz funkcję ```Tree```. Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
// Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.



const Tree = function (type) { // czy Tree tutaj z duzej czy traktujemy jak zwykla funkcja = malej
    this.type = type
}

Tree.prototype.bloom = function () {
    console.log('I am a ' + this.type + ' and I am blooming')      // o co chodzi z ta metoda hasOwnProperty . WIem ze zwraca boolena ale jak to sie ma do tego 
    // przykladu ?  Jaks prawdzic czy metoda bloom() zostala stworzona osbno dla kazdej instancji ?
}
//const bloom = () => console.log('I am blooming')
// Tree to Obiekt, który ma property type i dodajesz mu metodę bloom. 
// możesz zrobić np tak, firstTree.hasOwnProperty('type'); i to zwróci true
// w praktyce się stosuje klasy np.

class Tree {
    constructor(type) {   //w konstruktorze definiujesz property które definiujesz na początku
        this.type = type
    }
    
    bloom() {  //metoda
        console.log(`I am a ${this.type} and I am blooming`)
    }
}



let firstTree = new Tree('Oak')
let secondTree = new Tree('Grape')
let thirdTree = new Tree('Holly')

firstTree.bloom()
secondTree.bloom()


// Dopisz do konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I'm blooming". Sprawdź za pomocą metody ```hasOwnProperty()```,
// czy metoda ta została stworzona dla każdej instancji osobno? Jeśli tak zoptymalizuj kod dodając ją do prototypu funkcji ```Tree```.


// ### Dodatkowe

// > Wszystkie zadania dodatkowe wykonaj w pliku app.js

// #### Zadanie 1 - dodatkowe
// Napisz funkcję ```addTheSameNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać sumę
// wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszmy argument funkcji.
// Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.


const addTheSameNumbers = (number, array) => {                                       //tutaj po glebszej rozkminie udalo mi sie zastosowac filter i reduce
    if (array.includes(number)) {
        return array.filter(elements => elements === number).reduce((a, b) => a + b)
    }
    return null
}
//bardzo spoko rozwiązanie. Można by się pokusić o rozbicie jeszcze na mniejsze funkcje

// ```JavaScript
console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10])) //=> 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100])) //=> 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0])) //=> 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46])) //=> null
// ```

// #### Zadanie 2 - dodatkowe
// Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**. 
//Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). 
//Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.



const deviders = (num) => {
    let result1 = []
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            result1.push(i)

        }

    } return result1
}

console.log(deviders(16))

const factors = (num) => {
    if (num > 0) {
        return deviders(num)
    } else {
        return []
    }
}

// ```JavaScript
console.log(factors(2)) //=> [2, 1]
console.log(factors(54)) //=> [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4)) //=> []
// ```

// #### Zadanie 3 - dodatkowe
// Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. 
//Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). 
//Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.
const getMissingElement = (array) => {
    console.log('array length: ' + array.length)
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + 1 !== array[i + 1]) {
            return array[i] + 1
        }

    } return null

}
// ```JavaScript
console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]))// => null
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15])) //=> 9
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4])) //=> -1
// ```

// #### Zadanie 4 - dodatkowe
// Napisz funkcję ```getLastNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać tablicę skadającą się z 
//tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.
const getLastNumbers = (num, array) => {
    if (typeof (num) !== 'number' || array==[]) {
        return []

    } return array.slice(-num)
}


// ```JavaScript
console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7])) //=> [6, 7]
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15])) //=> [12, 13, 14, 15]
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4])) //=> []
console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4])) //=> []
// ``` */}

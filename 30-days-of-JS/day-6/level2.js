/* Day 6 Level 2 Challenges */ 

// Task 1

function randomChar(n) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLength = n;
    let char = "";

    for (var i=0; i<charLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        char += chars.substring(randomNumber,randomNumber+1);
    }
    return char;
}

console.log(randomChar(10))

// Task 2

function randomHex() {
    let chars = "0123456789ABCDEF";
    let hex = "";

    for (var i=0; i<6; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        hex += chars.substring(randomNumber,randomNumber+1);
    }
    console.log(`%c #${hex}`, `color: #${hex}`)
}

randomHex()

// Task 3

function randomRGB() {
    
    function randomNumber() {
       return Math.floor(Math.random() * 256)
    }

    rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

    console.log(`%c ${rgb}`, `color: ${rgb}`)
}

randomRGB()

// Task 4

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

let COUNTRIES = countries.map(arr => arr.toUpperCase());
console.log(COUNTRIES);

// Task 5

let countriesNum = [];

for (country in countries) {
    countriesNum.push(countries[country].length)
}
console.log(countriesNum)

// Task 6


/* Day 6 Level 2 Challenges */

// Task 1

function randomChar(n) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLength = n;
    let char = "";

    for (var i = 0; i < charLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        char += chars.substring(randomNumber, randomNumber + 1);
    }
    return char;
}

console.log(randomChar(10))

// Task 2

function randomHex() {
    let chars = "0123456789ABCDEF";
    let hex = "";

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        hex += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(`%c #${hex}`, `color: #${hex}`)
}

randomHex()

// Task 3

function randomRGB() {

    function randomNumber() {
        return Math.floor(Math.random() * 256)
    }

    rgb = `rgb(${
        randomNumber()
    }, ${
        randomNumber()
    }, ${
        randomNumber()
    })`

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
    'Iceland',
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

let arrayOfCountries = [];

for (let i = 0; i < countries.length; i++) {
    arrayOfCountries.push([
        countries[i], String(countries[i].slice(0, 3)).toUpperCase(),
        countries[i].length
    ])
}

console.log(arrayOfCountries)

// Task 7

let land = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land") === true) {
        land.push(countries[i])
    }
}

console.log(land)

// Task 8

let ia = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia") === true) {
        ia.push(countries[i])
    }
}

console.log(ia)

// Task 9

let max = 0;
let longestCountry = "";

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > max) {
        max = countries[i].length;
        longestCountry = countries[i];
    }
}

console.log(longestCountry, max)

// Task 10

let fiveL = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        fiveL.push(countries[i]);
    }
}

console.log(fiveL);

// Task 11


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let webCount = 0;
let webMax = "";

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > webCount) {
        webCount = webTechs[i].length;
        webMax = webTechs[i];
    }
}

console.log(webMax, webCount)

// Task 12

let webTechNum = [];

for (let i = 0; i < webTechs.length; i++) {
    webTechNum.push([webTechs[i], webTechs[i].length])
}

console.log(webTechNum)

// Task 13

let mern = "";

for (tech in mernStack) {
    mern += mernStack[tech].slice(0, 1);
}

console.log(mern);

// Task 14

for (tech in webTechs) {
    console.log(webTechs[tech])
}

// Task 15

let fruits = ['banana', 'orange', 'mango', 'lemon'];

let reversedFruits = []; 

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i])
}

 console.log(reversedFruits);

 // Task 15

 let splitTech = []

 for (tech in webTechs) {
    splitTech.push(webTechs[tech])
 }

let fullStack = [];

fullStack.push([splitTech.splice(0, Math.ceil(splitTech.length / 2))], [splitTech])

console.log(fullStack);


 for (tech in webTechs) {
    console.log(webTechs[tech].toUpperCase())
}
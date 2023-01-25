/* Day 6 Level 1 Challenges */ 

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

// Task 1

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

let j = 0;

do {
    console.log(j);
    j++
} while (j <= 10);

// Task 2

for (let i = 10; i >= 0; i--) {
    console.log(i);
}


let n = 10;

while (n >= 0) {
    console.log(n);
    n--;
}

let k = 10;

do {
    console.log(k);
    k--
} while (k >= 0);

// Task 3

let someN = prompt("Enter the number you want to count to:")

for (let i = 1; i <= someN; i++) {
    console.log(i)
}

// Task 4

function pyramid(n) {
    for(let i = 1; i <= n; i++) {

        let line = '';

        for (let j = 1; j <= i; j++) {
            line += "#"
        }
        console.log(line);
        
    }
}

pyramid(6);

// Task 5 

function timesTables(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} x ${i} = ${i * i}`)
    }
}

timesTables(10);

// Task 6 

function cube(n) {
    console.log(`i`, `i^2`,  `i^3`)
    for (let i = 1; i <= n; i++) {
        console.log(`${i} ${i * i} ${i * i * i}`)
    }
}

cube(10);

// Task 7

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 8 

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Task 9

for (var count = 2; count <= 100; count++) {

    var prime = true;

    for (let i = 2; i <= count; i++) {
        if(count % i === 0 && i !== count) {
            prime = false;
        }
    }

    if (prime === true) {
        console.log(count)
    }
}

// Task 10

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Task 11

let sumEven = 0;
let sumOdd = 0;

for(let i = 0; i<=100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log(`The sum of all evens from 0 - 100 is ${sumEven} and the sum of all odds is ${sumOdd}.`)

// Task 12

let sumArray = [sumEven, sumOdd];

console.log(sumArray);

// Task 13

let randomNums = [];

function randomNumber(){
    for(let i = 1; i <=5; i++) {
        randomNums.push(Math.floor(Math.random() * 101));
    }
}

randomNumber()

console.log(randomNums)

// Task 14

let randomUniqueNums = [];

function randomUniqueNumber(){

while(randomUniqueNums.length < 5 ) {

    number = Math.floor(Math.random() * 101);

    if (randomUniqueNums.includes(number) === false) {
        randomUniqueNums.push(number);
    }
}
}

randomUniqueNumber()

console.log(randomUniqueNums);

// Task 15

function randomChar() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLength = 6;
    let char = "";

    for (var i=0; i<charLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        char += chars.substring(randomNumber,randomNumber+1);
    }
    return char;
}

console.log(randomChar())
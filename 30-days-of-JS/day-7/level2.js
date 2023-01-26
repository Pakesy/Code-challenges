/* Day 7 Level 2 Challenges */ 

// Task 1

function solveLinEquation() {

}

// Task 2 

function solveQuadratic(a, b, c) {
    if(a === 0) { return }

    let back = Math.pow(b, 2) - 4*a*c;

    let plusX = (-b+Math.pow(back, 0.5))/(2*a);
    let minusX = (-b-Math.pow(back, 0.5))/(2*a);

    return [plusX, minusX]
}

console.log(solveQuadratic(1, 7 , 12))

// Task 3

function printArray(array) {
    array.forEach(element => {
        console.log(array);      
    });
}

printArray(Array(10).fill(5));

// Task 4

function showDateTime() {
    const d = new Date();

    let mins = d.getMinutes();
    mins < 10 ? '0' + mins.toString(): mins;
    let hrs  = d.getHours();
    hrs < 10 ? '0' + hrs.toString(): hrs;
    
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    
    console.log(`${year}-${month+1}-${date}  ${hrs}:${mins}`);
}

showDateTime()

// Task 5

function swapValues (x, y) {
    return `${y}, ${x}`
}

console.log(
swapValues(10, 1)
)

// Task 6

function reverseArray(array) {
    let reversedArray = []; 

    for (let i = array.length-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

const lol = ['hey', 'lol', 'test'];

console.log(reverseArray(lol))

// Task 7

function capitalizeArray(array) {
    let cappedArray = [];

    for (item in array) {
        cappedArray.push(array[item].charAt(0).toUpperCase() + array[item].substring(1))
    }
    return cappedArray;
}

console.log(capitalizeArray(lol))

// Task 8

function addItem(array, item) {
    array.push(item);
}

addItem(lol, "Test2")
console.log(lol)

// Task 9

function removeItem(array, index) {
    array.splice(index, 1)
}

removeItem(lol, 3)

console.log(lol)

// Task 10

function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(10))

// Task 11

function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfOddNumbers(5))

// Task 12

function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfEvenNumbers(5))

// Task 13

function evensAndOdds(n) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }

    return `Evens: ${even}, Odds: ${odd}`
}

console.log(evensAndOdds(100))

// Task 14

function sumOfArgs(n) {
    let sum = 0;

    for (elem in arguments) {
        sum += arguments[elem];
    }

    return sum
}

console.log(sumOfArgs(1, 2, 10))

// Task 15

function randomUserIp () {
    let a = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let c = parseInt(Math.random() * 255);
    let d = parseInt(Math.random() * 255);
    
    
    return `${a}.${b}.${c}.${d}`;
  }

  console.log(randomUserIp())

  // Task 16

  function randomMacAddress () {
    let arr = [];
    let chars = '0123456789ABCDEF';
    
    for(let i = 1; i <= 6; i++) {
      let id1 = Math.ceil(Math.random() * 15);
      let id2 = Math.ceil(Math.random() * 15);
      
      arr.push(chars[id1] + chars[id2]);
    }
    
    return arr.join(':');
  }

  console.log(randomMacAddress())

  // Task 17


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

// Task 18


function userIdGenerator() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let uid = "";

    for (var i = 0; i < 7; i++) {
        var randomNumber = Math.ceil(Math.random() * chars.length);
        uid += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(`${uid}`)
}

userIdGenerator()


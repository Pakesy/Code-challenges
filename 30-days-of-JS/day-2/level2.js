// 2

console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

var tO = '10';
var ten = 10; 

console.log(typeof tO === typeof ten); // false

// Convert Number to string
console.log(tO === ten.toString()); // true

// Convert String to Number
console.log(parseInt(tO) === ten); // true

console.log(typeof tO === typeof ten.toString()); // true (both strings)
console.log(typeof parseInt(tO) === typeof ten); // true (both numbers)



console.log(parseFloat('9.8')); // 9.8

let num1 = parseFloat('9.8');
let num2 = 10; 

console.log(num1 === num2); // false
console.log(Number(num1.toFixed()) === num2); // true


let p1 = "Python"; 
let j1 = "Jargon"; 

console.log(p1.includes("on") === j1.includes("on")); // true

let sentence1 = "I hope this course is not full of jargon."; 
console.log(sentence1.includes("jargon")); // true

const num = Math.floor(Math.random () * 101) // Returns a random integer from 0 to 100
console.log(num); 

const range = Math.floor(Math.random() * 51) + 50;
console.log(range);

function getRandomIntInRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var RandomIntInRange = getRandomIntInRange(0, 255);
console.log(RandomIntInRange); 

let js = "JavaScript"; 
let randomIndex = Math.floor(Math.random() * (js.length - 1));
console.log(js[randomIndex]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

let bc = "You cannot end a sentence with because because because is a conjunction"; 
let newBc = bc.substr(bc.indexOf("because", 1), ("because".length * 3) +2);
console.log(newBc);

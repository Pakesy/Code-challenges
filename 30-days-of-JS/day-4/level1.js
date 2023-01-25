/* Day 4 Level 1 Challenges */ 


// Output

const output = document.querySelector(".out");


// Task 1

let yourAge = prompt("Enter your age:")

if (yourAge >= 18) {
    output.textContent = "You are old enough to drive."
} else {
    output.textContent = `You are left with ${18 - yourAge} years until you can drive.`;
}

Task 2



let yourAge2 = prompt("Enter your age:")
let myAge2 = 20;

if (yourAge2 > myAge2) {
    output.textContent = `You are ${Math.abs(yourAge2 - myAge2)} years older than me.`;
} else if (yourAge2 < myAge2) {
    output.textContent = `You are ${Math.abs(yourAge2 - myAge2)} years younger than me.`;
} else {
    output.textContent = `We are the same age.`;
}


// Task 3i


let a = prompt("Enter some A:")
let b = prompt("Enter some B:")

if (a > b) {
    output.textContent = "A is greater than B"
} else if (b > a ) {
    output.textContent = "B is greater than A"
} else {
    output.textContent = "A and B are the same."
}



// Task 3ii

let a = prompt("Enter some A:");
let b = prompt("Enter some B:");

a == b ? output.textContent = "A and B are the same."
: a < b ? output.textContent = "A is greater than B" 
: output.textContent = "B is greater than A";

*/



// Task 4




let number = prompt("Check if a number is even. Enter your number:");

console.log(number % 2);

number % 2 ? output.textContent = `${number} is an odd number` : output.textContent = `${number} is an even number`;






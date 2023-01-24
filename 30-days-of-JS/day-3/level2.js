// Level 2

// Task 1


let base = Number(prompt("Enter the base of your triangle"));
let height = Number(prompt("Enter the height of your triangle"));
function calcTriangle(base, height) {
    return 0.5 * base * height;
}
console.log("Your triangle's area is", calcTriangle(base, height));

// Task 2

let sideA = Number(prompt("Enter side A of your triangle"));
let sideB = Number(prompt("Enter side B of your triangle"));
let sideC = Number(prompt("Enter side C of your triangle"));
console.log("There perimeter of your triangle is", sideA + sideB + sideC);

// Task 3


let length = Number(prompt("Enter the length of your rectangle"));
let width = Number(prompt("Enter the width of your rectangle"));
let rArea = length * width;
let rPerimeter = 2 * (length + width);
console.log("The area of your rectangle is", rArea); 
console.log("The perimeter of your rectangle is", rPerimeter); 


// Task 4

let radius = Number(prompt("Enter the radius of your circle"));
let circleArea =  Math.PI * radius * radius;
let circleCircumference = Math.PI * radius * 2;
console.log("The area of your circle is", circleArea); 
console.log("The circumference of your circle is", circleCircumference); 



// Task 5

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Task 6 
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)


// Task 7 
// Compare the slope of above two questions.

// Task 8
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Task 9
let hours = Number(prompt("Enter the number of hours you worked"));
let rate = Number(prompt("Enter your hourly rate"));
console.log("Your weekly earning is", rate * hours);


// Task 10

function isNameLong(userName) {
    if (userName.length > 7) {
        console.log("You have a long name");
    } else {
        console.log("You have a short name");
    }
}
isNameLong(prompt("Enter your name"));

// Task 11
let firstName = prompt("Enter your first name"); 
let lastName = prompt("Enter your last name");

function compareFirstLast(firstName, lastName) {
    if (firstName.length > lastName.length) {
        console.log("Your first name is longer than your last name");
    } else if (firstName.length == lastName.length) {
        console.log("Your first and last name are the same length");
    } else {
        console.log("Your last name is longer than your first name");
    }
}

compareFirstLast(firstName, lastName); 


// Task 12

let myAge = 250;
let yourAge = 25;

console.log("I am", Math.abs(myAge - yourAge), "years older than you.")



const now = new Date()
const year = now.getFullYear() // return year

console.log(year);

let birthYear = prompt("Enter your birth year"); 
let calculateAge = year - birthYear; 
console.log(calculateAge); 
function canDrive(calculateAge) {
    if (calculateAge >= 17) {
        console.log("You are", calculateAge + ". You are old enough to drive.");
    } else {
        console.log("You are", calculateAge + ". You are not old enough to drive.");
    }
}

canDrive(calculateAge);



// 14

let yrsLived = parseInt(prompt("Enter number of years you live: "));
console.log(`You lived ${yrsLived * 31536000} seconds!`);

// 15

const d = new Date();

let mins = d.getMinutes();
let hrs  = d.getHours();

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

// Format 1

console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`);

// Format 2

console.log(`${date}-${month+1}-${year} ${hrs}:${mins}`);

// Format 3

console.log(`${date}/${month+1}/${year} ${hrs}:${mins}`);
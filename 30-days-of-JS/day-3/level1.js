/* Day 3 Level 1 Challenges */ 

// 1

var firstName = "Jack"; 
var lastName = "Fraized";
var country = "Australia"; 
var city = "Melbourne"; 
var age = 22;
var isMarried = false;
var year = 2000;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// 2

console.log(typeof '10' == 10);

// 3

console.log(parseInt('9.8') == 10);

// 4 

// i: three truthy comparisons

console.log(1 < 2);
console.log("a".length > "".length);
console.log(typeof true == typeof false);

// ii: three falsy comparisons

console.log(1 > 2);
console.log("a".length < "".length);
console.log(typeof true != typeof false);

console.log("\n")

// 5

/*

4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false

*/ 

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

var python = "Python"; 
var jargon = "Jargon";
console.log(python.length === jargon.lenth);

console.log("\n")

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
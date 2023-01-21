// 1

let challenge = "30 Days Of JavaScript";

console.log(challenge);

// string length
console.log(challenge.length); 

// string to uppercase
console.log(challenge.toUpperCase()); 

// string to lowercase
console.log(challenge.toLowerCase()); 

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(challenge.substring(3,7)); // Days

// substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(challenge.substr(3,4)); // Days
console.log(challenge.substr(0,2)); // 30

let FAANG = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

// split to any array at comma ->
console.log(FAANG.split(',')); // (7) ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// replace(): takes as a parameter the old substring and a new substring.
console.log(challenge.replace("JavaScript", "Python")); // 30

console.log(challenge.charAt(15)); // S

console.log(challenge.charCodeAt("J")); // 51

console.log(challenge.indexOf("a")); // 4

console.log(challenge.lastIndexOf("a")); // 14

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because")); // 31

console.log(sentence.lastIndexOf("because")); // 47

console.log(sentence.search("because")); // 31

console.log(challenge.trim()); // 30 Days Of JavaScript

console.log(challenge.startsWith("30")); // true

console.log(challenge.endsWith("JavaScript")); // true

console.log(challenge.match("a")); // ['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]

let first = '30 Days of ';
let second = 'JavaScript';

console.log(first.concat(second)); // 30 Days of JavaScript

console.log(challenge.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript


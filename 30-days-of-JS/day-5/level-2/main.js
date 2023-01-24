/* Day 5 Level 2 Challenges */ 

// 2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, REACT, PYTHON.'
let arr = text.split(/[,\s]+|[\s]/);
console.log(arr);

// 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green tea';

console.log(shoppingCart);

// 4

if (countries.includes("Ethiopia")) {
   console.log("ETHIOPIA");
} else
   countries.push("Ethiopia");



// 5

if (webTechs.includes("Sass")) {
   console.log("Sass is a CSS preprocess");
} else
   webTechs.push("Sass");



console.log(webTechs);

// 6

const frontEnd = [
   'HTML',
   'CSS',
   'JS',
   'React',
   'Redux'
]
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 2

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
 } else countries.push("Ethiopia");

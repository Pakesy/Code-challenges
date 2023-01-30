/* Day 8 Level 1 Challenges */ 

// Task 1

const dog = {};

// Task 2 

console.log(dog);

// Task 3

dog.name = "Chooky";
dog.legs = 4; 
dog.color = "black";
dog.age = 15;
dog.bark = function() {
    return "Woof Woof"
}

console.log(dog)

// Task 4

console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

// Task 5

dog.breed = "Mini Foxy / Jack Russell"; 
dog.getDogInfo = function() {
    return `${dog.name}, ${dog.legs}, ${dog.color}, ${dog.age}, ${dog.breed}, ${dog.bark()}`
}
console.log(dog.getDogInfo())


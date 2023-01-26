/* Day 7 Level 1 Challenges */

// Task 1

function firstname() {
    console.log("Conor Pakes")
}

firstname()

// Task 2

function fullname(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullname("Conor", "Pakes"))

// Task 3

function addNumbers(a, b) {
    return a + b
}

console.log(addNumbers(3, 3));

// Task 4

function areaOfRectangle(length, width) {
    return length * width
}

console.log(areaOfRectangle(5, 7))

// Task 5

function perimiterOfRectangle(length, width) {
    return 2 * (length + width)
}

// Task 6 

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}

// Task 7 

function areaOfCircle(radius) {
    return Math.PI * radius * radius
}

// Task 8 

function circumferenceOfCircle(radius) {
    return 2 * Math.PI * radius
}

// Task 9

function density(mass, volume) {
    return mass / volume
}

// Task 10

function calcSpeed(distanceMetres, timeSeconds) {
    return `${distanceMetres / timeSeconds} metres per second`
} 

console.log(calcSpeed(200, 2))

// Task 11

function weight(mass, gravity) {
    return mass * gravity
}

// Task 12

function convertCelsiusToFahrenheit(temp) {
    return (temp * 9/5) + 32
}

console.log(convertCelsiusToFahrenheit(30))

// Task 13

function calcBMI(w, h) {
    return w/(h*h);
 } 

 let BMI = calcBMI(84, 1.85);
 if (BMI < 18.5) console.log("Underweight");
 else if (BMI < 24.9)   
    console.log("Normal Weight");
 else if (BMI < 29.9) {
    console.log("Overweight");
 } else {
    console.log("OBESE!")
 };

 // Task 14

 function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } 
 
 console.log(checkSeason("March"));

 // Task 15

 function findMax(n1, n2, n3) {
    let max = 0;

    for (num of arguments) {
        if (num > max){max = num}
    }
    return max;
 }

 console.log(findMax(100, 30, 10))
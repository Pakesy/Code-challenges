/* Day 8 Level 2 Challenges */

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  // Task 1

  max = 0;
  username = '';

  for (person in users) {
    if (users[person].skills.length > max) {
        max = users[person].skills.length;
        username = person;
    }
  }
console.log(username);

// Task 2

let loggedIn = 0;
let fiftyPts = 0;

for (person in users) {
    if (users[person].isLoggedIn === true) {
        loggedIn += 1;
    }

    if (users[person].points >= 50) {
        fiftyPts += 1;
    }
}

console.log(loggedIn, fiftyPts)

// Task 3

let mern = ['MongoDB', 'Express', 'React', 'Node'];
let mernDevs = [];



for (person in users) {  
    if (mern.every(x => users[person].skills.includes(x)) === true) {
        mernDevs.push(person);
    }
}

console.log(mernDevs)

// Task 4

const usersCopy = Object.assign({}, users);
usersCopy.Conor = {};
usersCopy.Conor.email = "conorpakes@gmail.com";
usersCopy.Conor.skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Astro']

console.log(usersCopy)

// Task 5

console.log(Object.keys(users))

// Task 6 

console.log(Object.values(users))

// Task 7

let randomNum = Math.floor(Math.random() * countries.length)

const country = countries[Object.keys(countries)[randomNum]];

console.log(`
Country name: ${country.name}
Local currency: ${country.currency}
Capital City: ${country.capital}
Country population: ${country.population}
Languages spoken: ${country.languages}

`)
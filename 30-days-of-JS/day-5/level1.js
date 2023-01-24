// Level 1
// Declare an empty array;

let newArray = [];

// Declare an array with more than 5 number of elements

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  


// Find the length of your array

console.log(countries.length)

// Get the first item, the middle item and the last item of the array

let middle = Math.floor(countries.length / 2)
function lastIndex(name) {
    return name.length -1;
}

console.log(countries[0], countries[middle], countries[lastIndex(countries)])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [12, true, "hey", false, 71];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()

console.log(itCompanies);

// Print the number of companies in the array

console.log(itCompanies.length)

// Print the first company, middle and last company


console.log(itCompanies[0], itCompanies[middle], itCompanies[lastIndex(itCompanies)])

// Print out each company

for (company in itCompanies) {
    console.log(itCompanies[company]);
}

// Change each company name to uppercase one by one and print them out

for (company in itCompanies) {
    console.log(itCompanies[company].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.slice(0, itCompanies.length -1).join(', ') + " and " + itCompanies[lastIndex(itCompanies)] + " are big tech companies.")

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let companyName = "Facebook";

if (itCompanies.includes(companyName)) {
    console.log(companyName)
} else {
    console.log("Company doesn't exist.")
}

// Filter out companies which have more than one 'o' without the filter method



// Sort the array using sort() method

itCompanies.sort();

// Reverse the array using reverse() method

itCompanies.reverse();

// Slice out the first 3 companies from the array

console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// Slice out the middle IT company or companies from the array

console.log(itCompanies)
let middleCompany = itCompanies[Math.round((itCompanies.length - 1) / 2)];
console.log(middleCompany);

// Remove the first IT company from the array

itCompanies.shift();

console.log(itCompanies);

// Remove the middle IT company or companies from the array

itCompanies = itCompanies.filter(item => item !== middleCompany);

console.log(itCompanies);


// Remove the last IT company from the array
itCompanies.pop();

console.log(itCompanies);


// Remove all IT companies

itCompanies.length = 0; 

console.log(itCompanies);


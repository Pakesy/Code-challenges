/* Day 6 Level 3 Challenges */ 

const countriesLarge = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// Task 1

let countriesCopy = [];
for (country in countriesLarge) {
    countriesCopy.push(countriesLarge[country])
}

// Task 2

let sortedCountries = []; 

for (country in countriesLarge) {
    sortedCountries.push(countriesLarge[country])
}
sortedCountries.sort();
console.log(sortedCountries);

// Task 3

let sortedWebTech = []; 

for (tech in webTechs) {
    sortedWebTech.push(webTechs[tech])
}

sortedWebTech.sort()

console.log(sortedWebTech);

let sortedMern = [];

for (mern in mernStack) {
    sortedMern.push(mernStack[mern])
}

sortedMern.sort(); 

console.log(sortedMern)

// Task 4

let sortedLand = [];

for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].includes("land") === true) {
        sortedLand.push(countriesLarge[i])
    }
}

sortedLand.sort();
console.log(sortedLand);

// Task 5

let max2 = 0;
let longestCountry2 = "";

for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].length > max2) {
        max2 = countriesLarge[i].length;
        longestCountry2 = countriesLarge[i];
    }
}

console.log(longestCountry2, max2)

// Task 6

let fourChars = [];

for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].length  === 4) {
        fourChars.push(countriesLarge[i])
    }
}

console.log(fourChars);

// Task 7

let spaces = [];

for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].includes(" ") === true) {
        spaces.push(countriesLarge[i])
    }
}

spaces.sort();
console.log(spaces);


// Task 8 

let reversedCapsCountries = []; 

for (country in countriesLarge) {
    reversedCapsCountries.push(countriesLarge[country].charAt(0).toUpperCase() + countriesLarge[country].substring(1))
}

reversedCapsCountries.sort().reverse()

console.log(reversedCapsCountries)
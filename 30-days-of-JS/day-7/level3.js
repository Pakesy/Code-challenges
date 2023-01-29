/* Day 7 Level 3 Challenges */

// Task 1

function userIdGeneratedByUser(n, j) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var l = 0; l < j; l++) {
        let uid = "";
        for (var i = 0; i < n; i++) {
            var randomNumber = Math.ceil(Math.random() * chars.length);
            uid += chars.substring(randomNumber, randomNumber + 1);
        }
        console.log(`${uid}`)

    }
}
userIdGeneratedByUser(10, 5)

// Task 2

function rgbColorGenerator() {
    function random() {
        return Math.floor(Math.random() * 255);
    }

    let color = `rgb(${
        random()
    }, ${
        random()
    }, ${
        random()
    })`;
    console.log(`%c ${color}`, `color: ${color}`)
}

rgbColorGenerator()

// Task 3

function arrayOfHexaColors(n) {
    let chars = "0123456789ABCDEF";
    let arrayOfHex = [];

    for (let l = 0; l < n; l++) {
        let hex = "";
        for (var i = 0; i < 6; i++) {

            var randomNumber = Math.floor(Math.random() * chars.length);
            hex += chars.substring(randomNumber, randomNumber + 1);
        }
        arrayOfHex.push(hex);
    }
    return arrayOfHex
}

console.log(arrayOfHexaColors(3))

// Task 4

function arrayOfRgbColors(n) {
    let arrayOfRGB = [];;
    let rgb = "";

    function random() {
        return Math.floor(Math.random() * 255);
    }

    for (let l = 0; l < n; l++) {
        rgb = `rgb(${
            random()
        }, ${
            random()
        }, ${
            random()
        })`;
        arrayOfRGB.push(rgb);
    }
    return arrayOfRGB
}

console.log(arrayOfRgbColors(2))

// Task 5

function convertHexaToRgb(hex) {

    var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);

    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}

console.log(convertHexaToRgb('#102123'))

// Task 6

function convertRgbToHexa(r, g, b) {
    function toHex(n) {
        var hex = n.toString(16);
        return hex;
    }

    return toHex(r) + toHex(g) + toHex(b);
}

console.log(convertRgbToHexa(66, 77, 50))

// Task 7

function generateColors(t, n) {

    function randomHex() {
        let chars = "0123456789ABCDEF";
        let hex = "";

        for (var i = 0; i < 6; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            hex += chars.substring(randomNumber, randomNumber + 1);
        }
        console.log(`%c #${hex}`, `color: #${hex}`)
    }

    function rgbColorGenerator() {
        function random() {
            return Math.floor(Math.random() * 255);
        }
        let color = `rgb(${
            random()
        }, ${
            random()
        }, ${
            random()
        })`;
        console.log(`%c ${color}`, `color: ${color}`)
    }

    for (let i = 0; i < n; i++) {
        switch (t) {
            case 'hex': randomHex()
                break

            case 'rgb': rgbColorGenerator();
                break
            
            default :
                console.log("Please enter a valid color type.")
                return
        }
    }


}

generateColors('rgb', 2)
generateColors('hex', 2)
generateColors('lol', 2)

// Task 8

let test = ['lol', 'hey', 'jack', 'john']

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

console.log(shuffle(test));

// Task 9

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5))

// Task 10


function isEmpty(param) {
    if (param == null || param == undefined || param == '') {
        return true;
    }
    return false;
}

// Task 11

function sumOfArgs() {
    let total = 0;
    for (elem of arguments) {
        total += elem;
    }
    return total;
}

console.log(sumOfArgs(6, 8, 10))

// Task 12

function sum(arr) {
    let sum = 0;
    for (const i of arr) {
        sum += i
    }
        
    return sum;
}

// Task 13

function average(arr) {
    return sumOfArrayItems(arr) / arr.length;
}

// Task 14

function modifyArray(array) {
    if (array.length < 5) {
        return 'item not found';
    } else {
        array[4] = array[4].toUpperCase();
        return array;
    }
}

console.log(modifyArray([
    'Avocado',
    'Tomato',
    'Potato',
    'Mango',
    'Lemon',
    'Carrot'
]))
console.log(modifyArray([
    'Google',
    'Facebook',
    'Apple',
    'Amazon',
    'Microsoft',
    'IBM'
]));

// Task 15

function isPrime(n) {
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && i !== n) {
            return false
        } else {
            return true
        }
    }

}

console.log(isPrime(23));

// Task 16

let test2 = [1, 4, 'three', 6];
let test3 = [1, 1, 4, 5];


function isUnique(array) {
    let set = new Set(array);
    return set.size === array.length ? true : false;
}

console.log(isUnique(test2))
console.log(isUnique(test3))

// Task 17

let dTest = [1, 4, 'three', 6];

function dataTypeOf(array) {
    let type = typeof array[0];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== type) {
            return false;
        }
    }
    return true;
}

console.log(dataTypeOf(dTest))

// Task 18

function isValidVariable(variable) {
    let regex = /^[a-zA-Z_$]+[a-zA-Z_$0-9]*$/;
    return regex.test(variable);
}

// Task 19

function randomNumArray() {
    let randomNumArray = [];

    while(randomNumArray.length < 7) {
        let randomNum = Math.floor(Math.random() * 10);
        if(randomNumArray.includes(randomNum) === false){
            randomNumArray.push(randomNum);
        }
    }

    return randomNumArray
}

console.log(randomNumArray())

// Task 20

const countriesArray = [
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

function reverseCountries(array) {
    let copy = array.slice(0);
    copy.reverse();
    return copy
}


console.log(reverseCountries(countriesArray))
const ages = [
    19,
    22,
    19,
    24,
    20,
    25,
    26,
    24,
    25,
    24
];

function min(array) {
    array.sort();

    return ages[0];
}

function max(array) {
    array.sort();
    return ages[ages.length - 1];
}

function median(array) {
    array.sort();
    const midpoint = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        return array[midpoint]
    } else {
        return(array[midpoint] + array[midpoint + 1]) / 2;
    }
}

function averageAge(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total / array.length;
}

function range(array) {
    return max(array) - min(array);
}

let minAverage = Math.abs(min(ages) - averageAge(ages));
let maxAverage = Math.abs(max(ages) - averageAge(ages));

console.log(ages.sort())
console.log(min(ages))
console.log(max(ages))
console.log(median(ages))
console.log(averageAge(ages))
console.log(range(ages))
console.log(minAverage, maxAverage)

// 2


console.log(countries.slice(0, 10))
console.log(countries.length)
let middleCountry = Math.floor(countries.length / 2)
console.log(countries[middleCountry])

let countriesFirstHalf = countries.splice(0, Math.ceil(countries.length / 2));
let countriesSecondHalf = countries;

console.log(countriesFirstHalf)
console.log(countriesSecondHalf)

/* Day 4 Level 2 Challenges */ 

//  Task 1

let grade = prompt("Enter your grade:");

if (grade >= 90 && grade <= 100) {
    output.textContent = `A`
} else if (grade >= 70 && grade <= 89) {
    output.textContent = `B`
} else if (grade >= 60 && grade <= 69) {
    output.textContent = `C`;
} else if (grade >= 50 && grade <= 59) {
    output.textContent = `D`;
} else if(grade >= 0 && grade <= 49) {
    output.textContent = `F`;
} else {
    output.textContent = `Please enter a score between 0-100.`;
}



// Task 2



let month = prompt("Enter month of the year:").toLowerCase();
console.log(month);

if (month === "september" || month === "october" || month === "november") {
    output.textContent = `Autumn`;
} else if (month === "december" || month === "january" || month === "february") {
    output.textContent = `Winter`;
} else if (month === "march" || month === "april" || month === "may") {
    output.textContent = `Spring`;
} else if (month === "june" || month === "july" || month === "august") {
    output.textContent = `Summer`;
} else {
    output.textContent = `Please enter a valid month.`;
}

// Task 3

let day = prompt("Day of the week:").toLowerCase();


switch(day) {
    case `monday` :
        output.textContent =   `Monday is a weekday.`;
        break;
    case `tuesday` :
        output.textContent =   `Tuesday is a weekday.`;
        break;
    case `wednesday` :
        output.textContent =   `Wednesday is a weekday.`;
        break;

    case `thursday` :
        output.textContent =   `Thursday is a weekday.`;
        break;

    case `friday` :
        output.textContent =   `Friday is a weekday.`;
        break;

    case `saturday` :
        output.textContent =   `Saturday is a weekend.`;
        break;

    case `sunday` :
        output.textContent =   `Sunday is a weekend.`;
        break;

    default :
        output.textContent =   `Please enter a valid day.`;
        break;
    
}

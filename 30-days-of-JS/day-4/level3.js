 // Level 3

let month = prompt("Enter month of the year:").toLowerCase();
let year = prompt("Enter year:")

const isLeap = year => new Date(year, 1, 29).getDate() === 29;

switch(month) {
    case 'january':
        output.textContent = `January has 31 days.`;
        break;
    case 'february':
        if (isLeap(year) === true) {
            output.textContent = `February has 29 days.`;
        } else {
        output.textContent = `February has 28 days.`;
        }
        break;
    case 'march':
        output.textContent = `March has 31 days.`;
        break;
    case 'april':
        output.textContent = `April has 30 days.`;
        break;
    case 'may':
        output.textContent = `May has 31 days.`;
        break;
    case 'june':
        output.textContent = `June has 30 days.`;
        break;
    case 'july':
        output.textContent = `July has 31 days.`;
        break;
    case 'august':
        output.textContent = `August has 31 days.`;
        break;
    case 'september':
        output.textContent = `September has 30 days.`;
        break;
    case 'october':
        output.textContent = `October has 31 days.`;
        break;
    case 'november':
        output.textContent = `November has 30 days.`;
        break;
    case 'december':
        output.textContent = `December has 31 days.`;
        break;
    default:
        output.textContent = `Enter a valid month.`;
        break;

    }
// L3

// Task 1
console.log("Task 1")

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."; 
let lovePattern = /love/gi;
console.log(love.match(lovePattern));

// Task 2
console.log("\n" + "Task 2")

let bc = "You cannot end a sentence with because because because is a conjunction";
let bcPattern = /because/gi;
console.log(bc.match(bcPattern).length);

// Task 3
console.log("\n" + "Task 3")

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'; 
const Hash = /#/g;
const At   = /@/g;
const And  = /&/g; 
const ExcMark = /!/g; 
const Dollar = /\$/g;
const Percent = /\%/g;
const dots = /;/g;

const cleanedQuote = sentence.replace(Hash, "").replace(At, "").replace(And, "").replace(ExcMark, "").replace(Dollar, "").replace(Percent, "").replace(dots, "");
console.log(cleanedQuote);

// Task 4
console.log("\n" + "Task 4")

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'; 
const digitPattern = /\d+/g;
let digitWords = income.match(digitPattern); 

let inc1 = parseInt(digitWords[0]);
let inc2 = parseInt(digitWords[1]);
let inc3 = parseInt(digitWords[2]);

let income1 = inc1*12; 
let income2 = inc2;
let income3 = inc3*12;

let salary = income1 + income2 + income3;


console.log("He earns $" + salary + " per annum");
console.log("Salary: $" + income1 + '\n' + "Bonus: $" + income2 + '\n' + "Courses: $" + income3);


/* Day 8 Level 3 Challenges */
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    }, {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {
                userId: 'fg12cy',
                rate: 5
            }, {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    }, {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    }, {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [
            {
                userId: 'fg12cy',
                rate: 5
            }
        ],
        likes: ['fg12cy']
    }
]

// Task 1

const personAccount = {
    firstName: 'James',
    lastName: 'Goodhand',
    balance: 0,

    incomes: {
        courses: 2000,
        salary: 2300,
        freelance: 1800
    },
    expenses: {
        rent: 1200,
        utilities: 400,
        groceries: 150
    },

    totalIncome: function () {
        total = 0;
        for (income in personAccount.incomes) {
            total += personAccount.incomes[income];
        }
        return total
    },

    totalExpenses: function () {
        total = 0;
        for (expense in personAccount.expenses) {
            total += personAccount.expenses[expense];
        }
        return total
    },

    accountInfo: function () { // return Object.entries(personAccount)

        return `First name: ${
            this.firstName
        } \nLast name: ${
            this.lastName
        } \nAccount balance: $${
            this.accountBalance()
        } \n`;
    },

    addIncome: function (income, amount) {
        this.incomes[income] = amount;
    },

    addExpense: function (expense, amount) {
        this.expenses[expense] = amount;
    },

    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses()
    }
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())
personAccount.addIncome("Graphic design", 4000)
personAccount.addExpense("Food", 500)
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())

// Task 2

// a)

function signUp(name, userEmail, pw) {
    for (user in users) {
        if (userEmail === users[user].email || name === users[user].username) {
            return "User exists!";
        }
    }

    function userIdGenerator() {
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
        let uid = "";

        for (var i = 0; i < 6; i++) {
            var randomNumber = Math.ceil(Math.random() * chars.length);
            uid += chars.substring(randomNumber, randomNumber + 1);
        }
        return uid;
    }

    function getDate() {
        const d = new Date();

        let mins = d.getMinutes();
        mins < 10 ? '0' + mins.toString() : mins;
        let hrs = d.getHours();
        hrs < 10 ? '0' + hrs.toString() : hrs;

        let year = d.getFullYear();
        let month = d.getMonth();
        let date = d.getDate();

        return `${date}/${
            month + 1
        }/${year}  ${
            hrs > 12 ? (hrs - 12).toString() + ':' + mins.toString() + ' PM' : hrs.toString() + ':' + mins.toString() + ' AM'
        }`;
    }


    let newUser = {
        _id: userIdGenerator(),
        username: name,
        email: userEmail,
        password: pw,
        createdAt: getDate()
    };
    users.push(newUser)
}

signUp('fraized', 'fraized@zim.com', '2hsn802')
console.log(users)


// b)

function signIn(un, pw) {

    for (user in users) {
        if (un === users[user].username && pw === users[user].password) {
            return `${un.charAt(0).toUpperCase() + un.substr(1)}, you are now logged in.`
        } 
    }
    return "Invalid username or password.";
}

console.log(signIn('fraized', '2hsn802'))
console.log(signIn('Jack', 'JS838'))
console.log(signIn('fraized', 'jimys'))


// Task 3

// a)

function rateProduct(productNo, uid, rating) {
    for (product in products) {
        if (products[product]._id === productNo) {
            let newRating = {
                _id: uid,
                rate: rating
            };
            products[product].ratings.push(newRating)
        }
    }
}

rateProduct('aegfal', 'zwf8md', 5)

console.log(products)
// b)

function averageRating() {
    let totalRating = 0;
    let numOfRatings = 0;
    
    products.forEach(product => {
        product.ratings.forEach(rating => {
            totalRating += rating.rate;
            numOfRatings++;
        });
    });
    
    return totalRating / numOfRatings;
}

console.log(averageRating())

// Task 4

function likeProduct(userId, productId) {
    const product = products.find(product => product._id === productId);
    const index = product.likes.indexOf(userId);

    if (index === -1) {
        product.likes.push(userId);
    } else {
        product.likes.splice(index, 1);
    }
}

likeProduct('fraized', 'aegfal')
console.log(products)
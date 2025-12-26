/* 1. Create an arrow function called square that takes a number as an argument and returns its square. Use
the arrow function to calculate the square of a given number and display the result*/

const square = (num) => num * num;

const number = 5;
const result = square(number);
console.log("Square:", result); // Output: Square: 25


/* 2. The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// a. Sort the array and find the min and max ages
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// b. Find the median age (one middle item or two middle items divided by two)

let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[ages.length / 2 - 1];
  const mid2 = ages[ages.length / 2];
  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}

// c. Find the average age (all items divided by number of items)

const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;


// d. Find the range of the ages (max minus min)

const ageRange = maxAge - minAge;

// e. Compare the value of (min - average) and (max - average), use abs() method

const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);    
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Age Range:", ageRange);
console.log("Min - Average Difference:", minAvgDiff);
console.log("Max - Average Difference:", maxAvgDiff);

/* 3. Create a Map to store contact information (name, phone number, email, location) and implement a function 
to retrieve contact details by name. */

const contactsmap = new Map();
contacts.set("raju", { phone: "123-456-7890", email: "raju@example.com" , location: Mumbai});
contacts.set("rahul", { phone: "098-765-4321", email: "rahul@example.com", location: pune });
contacts.set("raj", { phone: "098-765-4321", email: "raj@example.com", location: noida});


function getContactDetails(name) {
  return contactsmap.get(name);
}

console.log(getContactDetails( "raju"));

/* 4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function. */


const person1 = { name: "sachin", age: 50 };
const person2 = { name: "virat", age: 40};

function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person2);


/*5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares. */

const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
const squaresMap = new Map();

uniqueNumbers.forEach(num => {
  squaresMap.set(num, num * num);
});

console.log("Unique Numbers:", [...uniqueNumbers]);
console.log("Squares Map:", squaresMap);

/* 6. Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and
logs a message */

    //task 1
    function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
    }

    // task 2
    displayInfo.call(null, "raju", "Developer"); 
    
    // task 3
    displayInfo.apply(null, ["rahul", "Designer"]); 
    
    // task 4
    function greet() {
        console.log(`Hello, ${this.name}!`);
    }

    //task 5
    const user = { name: "raj" };
    const boundGreet = greet.bind(user);
    boundGreet(); 

    /* 7. tasks */

    //task 1: Create the calculator object
    const calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },

    //task 2: Implement the calculate method

        calculate:  function(operation, a, b) {
            if (operation === "add") {
                return this.add(a, b);
            } else if (operation === "subtract") {
                return this.subtract(a, b);
            } else if (operation === "multiply") {
                return this.multiply(a, b);
            } else {
                return "Invalid operation";
            }
        }
    };  

    //task 3: Use call to perform an addition operation

    const additionResult = calculator.calculate.call(calculator, "add", 5, 3);
    console.log("Addition Result:", additionResult); // Output: Addition Result: 8

    //task 4: Use apply to perform a multiplication operation with arguments as an array

    const multiplicationResult = calculator.calculate.apply(calculator, ["multiply", 4, 6]);
    console.log("Multiplication Result:", multiplicationResult); // Output: Multiplication Result: 24
    
    // task 5: Create the discountCalculator object

    const discountCalculator = {

        discountPercentage: 10,
        applyDiscount: function(price) {
            return amount - (price * this.discountPercentage) / 100;
        }
    };

    // task 6: Use bind to create a new function with a fixed discount percentage

    const applyTenPercentDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
    const discountedPrice = applyTenPercentDiscount(200);
    console.log("Discounted Price:", discountedPrice); // Output: Discounted Price: 180

        

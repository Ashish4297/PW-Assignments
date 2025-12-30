

/* 1. You are building an e-commerce website. Write a function that calculates the total price of a customer's order.
You are given an array of items, each with a price property. Use the forEach method to iterate through the array 
and sum up the prices to get the total order amount.*/

const ordersList = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Mobile Charger", price: 1500 },
  { name: "Laptop Charger", price: 10500 },
];

let sum = 0;
ordersList.forEach((data) => {
  sum += data.price;
});

console.log("The total price is Rs.", sum);


/* 2.Create a function that generates a random number and prints it to the console every 2 seconds.
The program should continue indefinitely. */


function randomNumberGenerator() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
}

function printWithInterval() {
  randomNumberGenerator();
  setInterval(randomNumberGenerator, 2000);
}

printWithInterval();



/* 3. You are given an array of expense objects representing monthly expenses.
Each object has amount and category.
Use the map method to calculate tax for each expense (tax rate = 10%).*/


let expensess = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

let expensesWithTax = expensess.map((expense) => {
  let tax = expense.amount * 0.1;
  return { ...expense, tax: tax };
});

console.log("Expenses with Tax:", expensesWithTax);



/* 4. Using the same expenses array, filter only the expenses with category "Groceries". */


let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

let groceriesExpenses = expenses.filter(
  (expense) => expense.category === "Groceries"
);

console.log("Groceries Expenses:", groceriesExpenses);



/* 5. Using the same array of expenses, calculate the total amount of all expenses using reduce. */


let expensees = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

let totalExpenses = expensees.reduce(
  (acc, expense) => acc + expense.amount,
  0
);

console.log("Total Expenses:", totalExpenses);


/* 6. You have a list of expenses, each with an amount and a category. Now, create a function named
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
called categorizedExpenses, where each element represents the category for the corresponding expense in
the original list. Finally, print out the categorizedExpenses array. */

let expenseess = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

function categorizeExpense(expense) {
  if (expense.amount > 100) {
    return "High Expense";
  } else {
    return "Low Expense";
  }
}

let categorizedExpenses = expenseess.map((expense) =>
  categorizeExpense(expense)
);

console.log("Categorized Expenses:", categorizedExpenses);


/* 7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of
each number. After completing the iteration, display the modified array. */

let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log("Doubled Numbers:", originalNumbers);



/* 8. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of
each number. After completing the iteration, display the modified array. */


let evenNumbers = [];

originalNumbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log("Even Numbers:", evenNumbers);

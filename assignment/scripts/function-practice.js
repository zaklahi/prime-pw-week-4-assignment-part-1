console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
console.log(hello())
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `hello ${name}`;
}

console.log(helloName());
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(num1, num2) {
  return num1 + num2
}
console.log(addNumbers(2, 4))


// 4. Function to multiply three numbers & return the result
function multiplyThree(x1, x2, x3) {
  return x1 * x2 * x3
}
console.log(multiplyThree(2, 5, 6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true
  } else {
    return false
  }
}
console.log(isPositive(-33));
console.log(isPositive(0));
console.log(isPositive(24555));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
// array is empty, return `undefined`.
function getLast(colors) {
  if (colors) {
    return colors.pop()

  } else {
    return 'undefinied'
  }
  
console.log(getLast());
}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

  let amount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value)
      return true
  } if (array[i] !== value) {
    return false
  }
};
let colors = ['blue', 'green', 'purple']
console.log(find('blue', colors))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

// }
// console.log(isFirstLetter(z))
// console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
// console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// function sumAll( ) {
//   let sum = 0
//   // TODO: loop to add items
//   return sum;
// }
let amount = [24, 23, 12, 12, 11];
function amountTotal(amount) {
  let total = 0;
  for (i = 0; i < amount.length; i++) {
    total += amount[i];
  } return total;
} amountTotal;


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let nums = [24, 25, -83, 90, 302];

const posArr = nums.filter(num => num > -1);
console.log(posArr);



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

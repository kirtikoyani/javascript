// First-class functions in JavaScript refer to the ability to treat functions as values,
// allowing them to be assigned to variables, passed as arguments to other functions,
// and returned as results from functions.

// 1. Assigning a function to a variable
function sayHello() {
  console.log("Hello!");
}

var greeting = sayHello;
greeting(); // Output: Hello!

//  2. Passing a function as an argument
function greet(func) {
  func();
}

function sayHi() {
  console.log("Hi!");
}

greet(sayHi); // Output: Hi!

//  3. Returning a function from another function
function getMultiplier(factor) {
  function multiply(num) {
    return num * factor;
  }
  return multiply;
}

var double = getMultiplier(2);
console.log(double(5)); // Output: 10

// 4. Higher-order functions using first-class functions
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

var triple = multiplyBy(3);
console.log(triple(6)); // Output: 18

//   5. Function composition using first-class functions:
function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

var result = multiplyByThree(addTwo(5));
console.log(result); // Output: 21

// bsic function
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7

// Anonymous Function
var f = function (a, b) {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7

//  Immediately Invoked Function Expression (IIFE)
const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7

//  Functions Within Functions
function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const fun1 = createFunction();
console.log(fun1(3, 4)); // 7

//  Function Hoisting
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const fun2 = createFunction();
console.log(fun2(3, 4)); // 7

//   Closures
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const fun3 = createAdder(3);
console.log(fun3(4)); // 7

//  Arrow Syntax
// Basic Syntax
const fun4 = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(fun4(3, 4)); // 7
// Omit Return
const fun5 = (a, b) => a + b;
console.log(fun5(3, 4)); // 7

// Rest Arguments
function fun6(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(fun6(3, 4)); // 7

var createHelloWorld = function () {
  return function (...args) {
    // console.log("Hello World",args[0]);
    return "Hello World" + args[0];
  };
};
// console.log(createHelloWorld()())
const funh = createHelloWorld();
console.log(funh("jsdjds")); // "Hello World"

var createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(-4);
console.log(counter());
console.log(counter());
console.log(counter());

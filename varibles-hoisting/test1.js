/****************************** conditional statements are not inclued as blocked scope ******************************/
// var x=1;
// if(x===1){
//     x=2;
// }
// console.log(x);

// let y=1;
// if(y===1){
//     y=2;
// }
// console.log(y);

/****************************** Hoisting cocept releted ******************************/

var test = ()=>{
    console.log(test);
}
console.log(test);
console.log(typeof(test));
var test=6;
console.log(typeof(test));
test =function (){
    console.log(test);
}

test();
console.log(test);
console.log(typeof(test));


// var test = 1;

// function functionHoisting() {
//   test = 10;
//   return test1();
// function test1() {
//     let b=9;
//     console.log(b);
//     return b;
// }

// }
// functionHoisting();
// console.log(test);


// var variable = 10;
// (()=>{
//    console.log(variable);
//    variable = 20;
//    console.log(variable);
// })();
// console.log(a());
// function a() {
//   function b() {
//     return 3;
//   }
//   return b();
//   function b() {
//     return 8;
//   }
// }

// console.log(a());
// function a() {
//   var b = function() {
//     return 3;
//   };
//   return b();
//   var b = function() {
//     return 8;
//   };
// }

/****************************** declartion before initialization ******************************/
console.log(a);
var a=10; /* let a=10; const a =10;*/

/****************************** array and object's property modify in let const ******************************/
// const b=10;
// const arr=[];
// // const b=20;
// arr.push('2,8');
// arr.unshift('90');
// // arr.pop();
// console.log(b)
// console.log(arr);

// working
const x = {};

x.foo = 'bar';

console.log(x); // {foo : 'bar'}

x.foo = 'bar2';

console.log(x); // {foo : 'bar2'}
const y = [];

y.push('foo');

console.log(y); // ['foo']

y.unshift("foo2");

console.log(y); // ['foo2', 'foo']

y.pop();

console.log(y); // ['foo2']

/****************************** give error in that cases ******************************/
// const x = {};
// x = {foo: 'bar'}; // error - re-assigning

// const y = ['foo'];
// const y = ['bar']; // error - re-declaring

// const foo = 'bar';
// foo = 'bar2';       // error - can not re-assign
// var foo = 'bar3';   // error - already declared
// function foo() {};  // error - already declared

/****************************** scoped in local and blocked ******************************/
let kirti='koyani';
function hello(){
    let kirti = 89;
    console.log(kirti);
}
hello();
console.log(kirti);
// Question: What happens if you try to redeclare a
// variable in an inner block that was already declared in an outer block using var, let, and const?

// Answer: If you redeclare a variable in an inner block using var,
// it will create a separate variable within that block, shadowing
// the outer variable. With let and const, redeclaring a variable in an inner
// block will result in a syntax error because they have block-level scoping.



const u={
    name:'kirti',
    email:'',
    ab:null,
}
console.log(u)
console.log(delete u.ab)
console.log(u.ab)
// function isPalindrome(str) {
//   // Remove non-alphanumeric characters and convert to lowercase
//   str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//   // Check if the reversed string is equal to the original string
//   return str === str.split("").reverse().join("");
// }

// // Test cases
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true

// function getFunName(callback){
// console.log(`function name is : ${callback.name} && this fun name is ${arguments.callee.name}`)
// }
// function func1(){
//   console.log(`function1`)
// }
// getFunName(func1);

function makePelendrom(str){
  newstr=str.split("");

  const len=newstr.length;
  let ele=newstr.toLocaleString().split(',');
  newarr=new Array(len*2);
  newarr.push(ele)
  console.log(newarr.flat(3))
  // console.log(newstr.copyWithin(3, 0));
  // console.log(newarr.flat(1))
  console.log(newarr.copyWithin(6, 5));
  // console.log(newarr.copyWithin(len, len-1));
console.log(newarr)
}
makePelendrom('hellow')
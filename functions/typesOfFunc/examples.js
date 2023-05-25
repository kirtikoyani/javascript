/*********** check string is pelindrom or not **********8*/
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the reversed string is equal to the original string
  return str === str.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true

// function getFunName(callback){
// console.log(`function name is : ${callback.name} && this fun name is ${arguments.callee.name}`)
// }
// function func1(){
//   console.log(`function1`)
// }
// getFunName(func1);

// function makePelendrom(str){
//   newstr=str.split("");

//   const len=newstr.length;
//   let ele=newstr.toLocaleString().split(',');
//   newarr=new Array(len*2);
//   newarr.push(ele)
//   console.log(newarr.flat(3))
//   // console.log(newstr.copyWithin(3, 0));
//   // console.log(newarr.flat(1))
//   console.log(newarr.copyWithin(6, 5));
//   // console.log(newarr.copyWithin(len, len-1));
// console.log(newarr)
// }
// makePelendrom('hellow')

//******************* strdlrt ********************/
// function stringsort(str){
// const newString= str.split('').sort().join('');
// console.log(newString);
// }
// stringsort('hsridkjf')

// const stringsort = (str)=>{ return str.split('').sort().join('')}
// console.log(stringsort('bdnf'));

// const stringfirstlettercapital = (str)=>{ return str.split(' ').every(element => element.charAt(1).toUpperCase())}
// function stringfirstlettercapital(str) {
//   const newString = str.split(" ");
//   let newArry = [];
//   for (let a = 0; a < newString.length; a++) {
//     newArry.push(newString[a].charAt(0).toUpperCase() + newString[a].slice(1));
//   }
//   console.log(newArry.join(" "));
//   return newArry.join(" ");
// }
// stringfirstlettercapital("bdnf jhddj hdfd");

// function findLongWord(str){
//   const newString = str.split(" ");
//   let res= newString[0];
//   for(let a=0;a<newString.length;a++){
//     if(res.length<newString[a].length){
//       res=newString[a];
//     }
//     // (res.length<newString[a].length)?res=newString[a]:console.log('df');
//   }
//   console.log(res)
//   return res;
// }
// findLongWord('hdr ksjire fdf idjfg ffu');

function longComp(...x){
const newString = x.toLocaleString().split(',');
let res= newString[0];
for(let a=0;a<newString.length;a++){
  if(res.length<newString[a].length){
    res=newString[a];
  }
  // (res.length<newString[a].length)?res=newString[a]:console.log('df');
}
console.log(res)
return res;
}
longComp(['dffd','fhggidfir','dhfjhgiuhfhg','dhfjhgiuhfhghasha'])
// 2nd

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country)
  {
    return lname.length > country.length ? lname : country;
  },
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
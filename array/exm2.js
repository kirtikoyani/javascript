let str='this is javascript';
let arr = str.split(' ');
let newstr= arr.map(ele=>ele.split('').reverse().join(''))
console.log(newstr.join(' '))

//Find max occurring char
let str1='this is javascript';
const arrofstr = str1.split("");
const arr1 = arrofstr.reduce((acc, curr) =>
Object.keys(acc).includes(curr) ? {...acc, [curr.toLowerCase()] :
acc[curr] + 1} : {...acc, [curr. toLowerCase()]: 1} , {})
const count = Object.entries(arr1). sort((a, b) => b[1] - a[1])
console.log(count)


const arr2=['a','b','c','d'];
let obj =arr2.reduce((a,it,i)=>({...a,[i]:it}),{})
console.log(obj);
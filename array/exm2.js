let str='this is javascript';
let arr0 = str.split(' ');
let newstr= arr0.map(ele=>ele.split('').reverse().join(''))
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


let arr = [
  { name: "kirti koyani", age: 12 },
  { name: "amish joshi", age: 23 },
  { name: "dhrupal savaliya", age: 26 },
  { name: "prince patel", age: 21 },
];

function hii(e) {
  const [fname, lname] = e.name.split(" ");
  const { age } = e;
  let obj2 = { fname, lname, age };
  return obj2;
}
 // map and filter
console.log(arr.filter((e) => e.age % 2 == 0).map(hii));

// reduce method
let stored = arr.reduce(function (providedValue, currentValue) {
  if (currentValue.age % 2 == 0) {
    const [fname, lname] = currentValue.name.split(" ");
    providedValue.push({ fname, lname, age: currentValue.age });
  }
  return providedValue;
}, []);
console.log(stored);
console.log(arr);


// if got kirti 2nd time then replace only 2nd one to amish
const arr4=['kirti','dhrupal','kirti','aadarsh','kirti'];

let heloo = [];
arr4.findIndex(helo);
function helo(e, i) {
  if (e == "kirti") {
    heloo.push(i);

    if (heloo[1] != undefined) {
      arr4.splice(heloo[1], 1, "amish");
    }
  }
}
// arr4[heloo[1]]='amish';
console.log(arr4);

// change same ele name chnage
const arr5=[{name:'kirti'},{name:'dhrupal'},{name:'kirti'},{name:'aadarsh'},{name:'kirti'}];
let array1=[];
arr5.find(findmethod);
function findmethod(e, i) {
  if (e.name == "kirti") {
    array1.push(i);
  }
}
arr5[array1[1]].name='amish';
console.log(arr5);
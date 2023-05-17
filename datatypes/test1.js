const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
const a1 = 1n > 2; // false
const b1 = 3 > 2n; // true
console.log(a1)
console.log(b1)

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`arr[${i}][${j}]= ${arr[i][j]}`);
}

console.log(arr); // returns false (cannot delete non-configurable properties)
console.log(delete Math.PI); // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
console.log(myObj); // returns true (can delete user-defined properties)
console.log(delete myObj.h); // returns true (can delete user-defined properties)
console.log(myObj); // returns true (can delete user-defined properties)
console.log(arr.pop())
console.log(arr.splice(3))
console.log(arr)


const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); // returns true
console.log(3 in trees); // returns true
console.log(6 in trees); // returns false
console.log("bay" in trees); // returns false
console.log("pop" in trees);// true

// instanceof
// objectName instanceof objectType
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
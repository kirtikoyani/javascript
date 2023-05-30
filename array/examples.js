// function getUniqueValues(arrOfNum) {
//     const set = new Set(arrOfNum);
//     console.log(...set)
//     return [...set];
//   }
//   getUniqueValues([1,2,2,3,45,67,7,5,4,5,3]);

//   const arrayOfNumbers = [1, 2, 3, 4];
// arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);

function differenceOf2Arrays(array1, array2) {
  var temp = [];
  array1 = array1.toString().split(",").map(Number);
  array2 = array2.toString().split(",").map(Number);
  console.log(array1);
  console.log(array2);
  for (var i in array1) {
    if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
  }
  for (i in array2) {
    if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
  }
  return temp.sort((a, b) => a - b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

const str = "025468";
// const str = '045468';
// const str = '62893849';
const result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] % 2 === 0) result.push("-", str[i]);
  else result.push(str[i]);
}
console.log(result.join(""));

// sorting second last ele
// function processData(myArray) {
// let newArray = myArray.split(' ');
// var second = newArray.sort(function(a,b){return b-a});
//     const set = new Set(second);
//     const array = [...set]
//     console.log(array[1])
// }
// processData('2 3 5 34 5 88 88');
//  sortcut
function processData(myArray) {
  const secLastEle = [
    ...new Set(
      myArray.sort((a, b) => {
        return b - a;
      })
    ),
  ][1];
  console.log(secLastEle);
}
processData([2, 3, 5, 34, 5, 88, 88]);

// reduce method that getting one array
const message = [
  {name:'kirti',age:20},
  {name:'prince',age:18},
  {name:'chapri',age:22},
  {name:'chibu',age:21},
]

var stored = message.reduce(function(providedValue, currentValue, currentIndex){
providedValue.push(currentValue.age);
//   console.log("providedValue: ", providedValue);
return providedValue;
}, []);
console.log(stored);
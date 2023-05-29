// string length less than 500
function processData(input) {
  if (input.length <= 500) console.log(input);
  else return false;
}
processData("jhdfs hr kuhritu jji");

//string to object
function printObjectProperty(myObject) {
  var obj = myObject.split(" ");
  var newObject = new Object();

  // Fill up the question marks
  newObject.type = obj[0];
  newObject.model = obj[1];
  newObject.color = obj[2];
  console.log(newObject);
}
printObjectProperty("first h4k5 red");

// find secend last big ele in array
function findSecLastEle(myArray) {
  const secLastEle = [
    ...new Set(
      myArray.sort((a, b) => {
        return b - a;
      })
    ),
  ][1];
  console.log(secLastEle);
}
findSecLastEle([2, 3, 5, 34, 5, 88, 88]);

// Find the Day
function findDay(myDate) {
  if (myDate == -1) return false;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(myDate);

  console.log(days[d.getDay()]);
}
findDay("05/29/2023");

//Display Information from an Object
function displayInformation() {
  for (ele of library) {
    if (ele.readingStatus == false) {
      console.log(`You still need to read '${ele.title}' by ${ele.author}.`);
    } else {
      console.log(`Already read '${ele.title}' by ${ele.author}.`);
    }
  }
}

// tail starts here
var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

displayInformation();

//Sort Array of Objects

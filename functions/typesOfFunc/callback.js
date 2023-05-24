function fetchData(url, callback) {
  // Simulating an asynchronous API request
  setTimeout(() => {
    const data = [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "kirti Koyani", age: 21 },
      { id: 3, name: "dhrupal ", age: 40 },
    ];
    callback(data);
  }, 2000);
}

function processData(data, callback) {
  // Simulating data processing
  setTimeout(() => {
    data.age += 1;
    callback(data);
  }, 1000);
}

function displayData(data) {
  data.forEach(displayAllData);
  function displayAllData(ele) {
    console.log(`i am ${ele.name}. My current age is ${ele.age}.`);
  }
}

function fetchAndProcessData(url, callback) {
  fetchData(url, (data) => {
    processData(data, (processedData) => {
      callback(processedData);
    });
  });
}

fetchAndProcessData("https://example.com/api/data", displayData);

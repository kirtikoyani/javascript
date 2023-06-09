// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data

function job(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world'), 2000);
    });
}
job()
.then((res)=>console.log(res))
.catch(()=>console.log('err'));

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function job(data){
    return new Promise((resolve, reject) => {
        if(!isNaN(data)){
            if(data%2 != 0)setTimeout(() => resolve('odd'), 1000);
            if(data%2==0){setTimeout(() => reject('even'), 2000);}
        }else {
            reject("error");
          }
    });
}
job(4)
.then((res)=>console.log(res))
.catch((e)=>console.log(e));

// chaining of promises

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}

var promise = job1();

promise
.then(function(data1) {
    console.log('data1', data1);
    return job2();
})
.then(function(data2) { // it's like it contain data2 is return function of above then function
    console.log('data2', data2);
    return 'Hello world';
})
.then(function(data3) { // same here above function's return thing pass as args in after then function
    console.log('data3', data3);
    return 'hii';
}).then((de)=>console.log(de)); // example


// catch

// syntax of then(null, errorCallback)
// Example 1 get error in .then
// var promise = job1();

promise.then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
});


// Example 2 to fetch error use catch
// var promise = job1();

promise

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.error(data);
});

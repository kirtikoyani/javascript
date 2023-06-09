// ques 1
function job1() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}
job1()

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1',"/****start 1st ****/");
})

.then(function() {
    console.log('Success 4',"/****end 1st ****/");
});

// ques2
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data,"/****start 2nd ****/");

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data,'/****end 2nd ****/');

    return job(true);
})

.catch(function(error) {
    console.log(error);
});


// 3rd ques
promise

.then(function(data) {
    console.log(data,"/****start 3rd ****/"); // success

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error,'throw'); //Defeat

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error,'yes');

    return 'Error caught';
})

.then(function(data) {
    console.log(data,'Error caught'); //Error caught

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message,"/****end 3rd ****/"); // test
})

.catch(function(data) {
    console.log('Error:', data.message);
});
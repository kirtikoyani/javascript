// const getPromise = async (s) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {console.log(s,resolve(s),reject); return resolve(s)}, 500);
//     });
// }
// console.log(getPromise('hjdsh'));
// const getPromise = (s) => {
//     return new Promise((resolve, reject) => {
//         // let a=20;
//         // if(a==20){
//         // resolve(s)
//         // }
//         setTimeout(() => resolve(s), 500);
//     });
// }
// getPromise('hjdsh')
// .then(function(){console.log('hi')})
// .catch(function(){console.log('err')});

// console.log(getPromise('hjdsh'));

const newexamp = new Promise((resolve, reject) => {
        let a=20;
        if(a==20){
        resolve(a)
        }
        function add(){
            b=10;
            console.log(a+b);
        }
        add();
    });
// newexamp();

console.log(newexamp);

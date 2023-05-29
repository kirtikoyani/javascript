// shallow copy and deep copy of obj
test = {
    name : "alb",
    city : "ahmdabad",
    address : {
        state : "Gujrat",
    }
}
// normal copy of obj that obj was copy of wholw refrence not value and store same memory allowcation at data so that if we cange data so that change update in main object
// const data = test;
// data.name = 'kirti';
//  data.address.state = "kirti's adress";
// console.log(test);

// if we copy of value of object so we have 2 concepts

// 1. shallow copy
// in that we can copy only one level of object value, we that obj contain nested obj so that their nested obj has store it's object as refrence
// so that we can create only one level of value of object in shallow copy

// two way for use of shallow copy
// const data1 = Object.assign({},test)
// // const data1 = {...test};
// data1.name = "abc";
// data1.address.state = "abc's adress";
// console.log(test);

// deep copy it was only copy of value of whole obj, but it doesn't work on function or date
// if we can use function or date in nested obj then we can use lodash library for it. we can chnage value in new obj but not chnage in main obj.
const data2 = JSON.parse(JSON.stringify(test));
data2.address.state = "one's Adress";
data2.name = "one"

console.log(test);
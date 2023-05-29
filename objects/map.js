// we can esily use map instaed of obj
let obj ={
    name:'kirti',
    10:'age'
};
let data = new Map([
    ['name','kirti'],
    [10,'age'],
    [true,'this is boolean key']
]);

obj.city = 'noida';
data.set('city','noida');

console.log(obj);
// console.log(obj.10); // getting error
console.log(data);
console.log(data.get(10));
console.log(data.size);
console.log(data.has('age'));
console.log(data.delete('age'));
console.log(`keys : ${data.keys()} & values : ${data.values()}`);
console.log('keys :', data.keys(),'values :', data.values());
data.forEach((v,k)=>{console.log(v,k)});
for([k,v] of data){
    console.log([k,v])
}
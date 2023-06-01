const arr1=['kirti','pisu','chibi'];
const [,,e]=arr1;
console.log(e); // chibi

let arr3=['djsf','difhgt','uyrtkdks'];
delete arr3[1];
console.log(arr3); // [ 'djsf', <1 empty item>, 'uyrtkdks' ]

const arr5 =[1,2,3];
arr5[5]=arr5;
console.log(arr5); // that give infinite nested arrays //<ref *1> [ 1, 2, 3, <2 empty items>, [Circular *1] ]

console.log([...'kirti']); // [ 'k', 'i', 'r', 't', 'i' ]


/********* object *********/
const data ={
    name:'kitti',
    age:20
}
const {name}=data
console.log(name); // kitti
//merge 2 obj

let obj1={fname:'sjd',birth:23,skill:'reading'}
Object.seal(obj1); // it can seal the object and we can't add any keys or value into that obj but we can modify value of given obj

let obj2={name:'yuoms',age:93}
let obj4={name:'dueu',age:34}
let obj3={...obj1,...obj2,...obj4}
console.log(obj3) // { fname: 'sjd', birth: 23, skill: 'reading', name: 'dueu', age: 34 }
// if same key avail in both obj that it was consider last key value but key position is 1st in merging obj

let data1='size';
const bird={
    size:83
};
console.log(bird[data1]); // 83
console.log(bird['size']); // 83
// console.log(bird[83]); // bird is not defined
console.log(bird.size); // 83
console.log(bird.data1); // undefined

let person ={name:'kirti'};
const member=[person];
person.name='hhfh';
person=null;
console.log(member); // [ { name: 'hhfh' } ]
console.log(person); // null

function car(){
    this.make='tata';
    return { make:'kia'};
}
const myCar = new car();
console.log(myCar); // { make: 'kia' }

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  console.log(shape.diameter()); // 20
  console.log(shape.perimeter()); // NaN


/********* function *********/

function sum(x,y,z){
    return x+y+z;
}
console.log(sum(...[1,2,3])); // 6

// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i,'var vala'),1)
// } // 3,3,3

// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i,'let vala'),1)
// } // 0,1,2

// console.log(setInterval(()=>console.log('hi'),1000000)); // getting id , we can stop setinterval to this id
// console.log(setInterval(()=>console.log('hi'),1000000));
// console.log(setInterval(()=>console.log('hi'),1000000));
// // if small time duration that will return hii in infinite loop

(()=>{
    let x=y=10;
})();
(()=>{
    let x=y=20;
})();
console.log(typeof x,'x : X is not define error'); // undefined x : X is not define error
console.log(typeof y,'y :',y); // number y : 20

let obj ={
    radius:20
}

let arrowFun = () => 2 * Math.PI * this.radius;

console.log(arrowFun()) // NaN

/********* string *********/


/********* operator *********/

let a=1
let b=1
let c=2;

console.log(a==b==--c); // true
console.log(a===b===--c); // false
console.log(b===--c); // false
console.log(--c === b,'before'); // false
console.log(--c === b,'after'); // false

console.log(typeof((''+'kirti')));// string
console.log(typeof(+'kirti')); // number
console.log(typeof(+true)); // number
console.log(typeof(!'kirti'));// boolean
console.log(typeof(!15)); // boolean

let num =0;
console.log(num++); // 0
console.log(++num); // 2
console.log(num); // 2

const str1 ='helllo i am kitty';
console.log(!typeof str1 === Object); // false
console.log(!typeof str1 === String); // false
console.log(!typeof str1 === false); // true
console.log(undefined * 2  + 387845); //NaN

const data2 = 3 + 4 + '6';
console.log(typeof data2,data2);//string 76

console.log(typeof 3 + 4 +'6');// number46

console.log(typeof(3 + 4 +  +'6'),(3 + 4 +  +'6'));// number 13
let arrs={
    name:'ksk',
    abc:{
        abc:'jdji'
    }
}
let arrs2={...arrs};
// let arrs2=arrs;
console.log(arrs.abc==arrs2.abc);//false
console.log(arrs==arrs2);//false
console.log({}==={});//false
console.log(''==='');//true

console.log(!true-true);//-1
console.log(!true+ +'10');//10
let users = {
  getFullName() {
    return this.fname +' '+ this.lname;
  },
  getAge() {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};
let student = {
  fname: "kirti",
  lname: "koyani",
  birth: 2002,
  //1st method
//   getFullName() {
//     return this.fname + this.lname;
//   },
//   getAge() {
//     let age = new Date().getFullYear() - this.birth;
//     return age;
//   },
// 3rd method
getAge:users.getAge,
getFullName:users.getFullName,
};
let teacher = {
  fname: "amishbhai",
  lname: "joshi",
  birth: 1980,
//   1 st method
//   getFullName() {
//     return this.fname + this.lname;
//   },
//   getAge() {
//     let age = new Date().getFullYear() - this.birth;
//     return age;
//   },
// 3rd method
getAge:users.getAge,
getFullName:users.getFullName

};

// 2nd method
// teacher.__proto__ = users;
// student.__proto__ = users;

console.log(student.getAge(), student.getFullName());
console.log(teacher.getAge(), teacher.getFullName());

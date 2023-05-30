function getEmail(firstname,lastname){
    return `${firstname}.${lastname}@test.com`
}
let student ={
    firstname:'kirti',
    lastname:'koyani',
    age:20,
    getEmail:getEmail(this.firstname,this.lastname)
}
let teacher ={
    firstname:'amish',
    lastname:'joshi',
    age:24,
    getEmail:getEmail(this.firstname,this.lastname)
}
console.log(student.getEmail)

// function BankAccount(customerName, balance = 0) {
//     this. customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.deposit = function (amount) {
//     this.balance += amount;
//     }
//     this.widrow = function (amount) {
//     this.balance -= amount;
//     }

//     }
//     const rakeshAccount = new BankAccount('Rakesh K', 1000);
//     const johnaccount = new BankAccount ("John Doe");

//     rakeshAccount.deposit(5000);
//     johnaccount.deposit(1000);

//     rakeshAccount.widrow(4400);
//     johnaccount.widrow(500);
//     console.log(rakeshAccount);
//     console.log(johnaccount);

const arr = [
  "kirti",
  "amish",
  "dhrupal",
  "amish",
  "aadarsh",
  "pisu",
  "amish",
  "kirti",
];
//   var values = [
//       { name: 'someName1' },
//       { name: 'someName2' },
//       { name: 'someName4' },
//       { name: 'someName2' }
//   ];

//   const foundDuplicateName = values.filter((nnn, index) =>{
//       const val1= values.find((x, ind)=> 'amish' === nnn && index !== ind );
//       // console.log(val1)
//       val1[2]='jskdj'
//       return val1
//        });
//   const foundDuplicateName = values.filter(hiii);
const findDuplicates = (arr) =>
//   arr.filter((item, index) => arr.indexOf(item) !== index);
  arr.filter(dublicate);
  function dublicate(item, index){
    let e=arr.indexOf(item) !== index;
  if(e==true){
    console.log(index)
  }
  return e
  }
const duplicates = findDuplicates(arr);
console.log(duplicates);

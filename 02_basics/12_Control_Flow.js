// const temp = 41;
//  if(temp === 41) {
//     console.log("Less than 50");
//  }
//  else {
//     console.log("Greater than 50");
//  }
//  console.log("Execute");

// const score = 200;
// if(score > 100) {
//     var power = "fly";
//     console.log(`Use Power : ${power}`);
// }
// console.log(`Use Power : ${power}`);

// const balance = 1000;

// if(balance<500) {
//     console.log("Less than");
// }
// else if(balance<750) {
//     console.log("Less than 500");
// }
// else if(balance<900) {
//     console.log("Less than 750");
// }
// else {
//     console.log("Less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;
// if(userLoggedIn && debitCard) {
//     console.log("Allow to buy cource");
// }
// if(loggedInFromEmail || loggedInFromGoogle) {
//     console.log("User logged in");
// }

//Switch Case Syntax
// switch(key) {
//     case value:
//         break;
//     default:
//         break;
// }

// const month = 3;
// switch(month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default case match");
//         break;
// }

// let arr = [1, 5, 9, 17, 2, 56];
// function largest(arr) {
//     let max = 0;
//     for(let i=0; i<=arr.length; i++) {
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     console.log(max);    
// }

// largest(arr);

// const userEmail = `souvik.de1612@gmail.com`; // '', ' ', []
// if(userEmail) {
//     console.log("Got user Email");
// }
// else {
//     console.log("Don't have user Email");
// }

//falsy values
//false, 0, -0, BigInt, 0n, " ", null, undefined, Nan
//truthy values
//"0", 'false', " ", [], {}, function(){}

//check array is empty or not
// const userEmail = [];
// if(userEmail.length === 0) {
//     console.log("Array is Empty");
// }

//check object is empty or not
// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }

//false == 0 => true, false == '' => true, 0 == ''=>true

//Nullish Coalescing Operator (??) : null undefined
// let val1;
// val1 = 5 ?? 10;
// console.log(val1);

// let val2;
// val2 = undefined ?? 15;
// console.log(val2);

// let val3;
// val3 = null ?? 10;
// console.log(val3);

// let val4;
// val4 = null ?? 10 ?? 20;
// console.log(val4);

//Terniary Operator
//Condition ? true:false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");




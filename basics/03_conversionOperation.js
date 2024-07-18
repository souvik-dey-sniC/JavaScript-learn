let score = 58;
//let score = "58";
//let score = "Souvik";
//let score = "56abc";
//let score = null;
//let score = undefined;
//let score = true;
//const {score} = req.body
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); //NaN

//"58" => 58
//"56abc" => NaN
//true = 1; false = 0;

//let isLoggedIn = 1;
//let isLoggedIn = "";
let isLoggedIn = "Souvik";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));//boolean
console.log(booleanIsLoggedIn);//true

//1 => true; 0=> false
//"" => false
//"Souvik" => true

let someNumber = 80;
let stringNumber = String(someNumber);
console.log(typeof(stringNumber)); //string
console.log(stringNumber); //80

// ********************** Operation **********************
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Hello";
let str2 = " Souvik";
let str3 = str1+str2;
console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(true);
// console.log(+true);
// console.log(-true);
// console.log(+false);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter);

//Primitive
//7 Types:String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);

const bigNumber = 6872365795n;

//Reference/Non-Primitive
//Array, Object, Functions

const heros = ["Saktiman", "Iron Man", "Thor"];
let obj = {
    name: "Souvik",
    age: 22,
    isLoggedIn: true
};
const myFunction = function () {
    console.log("Hello Souvik!");
}
console.log(typeof(myFunction));

//**********************************
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeChannel = "SouvikKumarDey";
let anotherName = myYoutubeChannel;
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "souvik23@google.com";
console.log(userOne.email);
console.log(userTwo.email);

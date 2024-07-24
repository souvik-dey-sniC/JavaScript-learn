// Singleton

//Object Literals
const mySym = Symbol("key1");

const jsUser = {
    name: "Souvik",
    "full name": "Souvik Kumar Dey",
    [mySym]: "mykey1",
    age: 22,
    location: "Kolkata",
    email: "souvik.de1612@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturdey"]
};
// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof(jsUser[mySym]));

// jsUser.email = "deysouvik3@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "souvik@chatgpt.com";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

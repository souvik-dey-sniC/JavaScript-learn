// const arr = [1, 2, 3, 4, 5];

// for(const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World";

// for(const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//Maps
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('Fr', 'France');
// map.set('IN', 'India');
//console.log(map);
// for(const [key, value] of map) {
//     console.log(key, ':-', value);
// }

//Print Object using for of loop
// const myObject = {
//     game1:'NFS',
//     game2:'WOKONG'
// }
// for(const [key, value] of myObject) {
//     console.log(key, ':-', value); //myObject is not iterable
// }

//Print Object Using for in loop
// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift'
// }
// for(const key in myObject) {
//     console.log(`${key} Shortcut is for ${myObject[key]}`);
// }

//Print Array Using for in loop
// const programming = ['js', 'cpp', 'rb', 'swift'];
// for(const key in programming) {
//     console.log(programming[key]);
// }

// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// })

//Print Object Under Array
const myCoding = [
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
];
myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
})


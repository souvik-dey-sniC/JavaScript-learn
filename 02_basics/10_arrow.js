const user = {
    userName: "Souvik",
    price: 1999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.userName = "Mit";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//     let userName = "Souvik";
//     console.log(this.userName);
// }
// chai();

// const chai = function() {
//     let userName = "Souvik";
//     console.log(this.userName);
// }
// chai();

// const chai = () => {
//     let userName = "Souvik";
//     console.log(this);
// }
// chai();

//Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));
//OR
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4));

//Return Object in Arrow Function
// const addTwo = (num1, num2) => ({userName: "Souvik"});
// console.log(addTwo(3, 4));

const myArray = [2, 5, 7];
myArray.forEach(() => {

});

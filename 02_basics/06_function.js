function sayMyName() {
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("V");
    console.log("I");
    console.log("K");
};
console.log(sayMyName());

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    console.log("Souvik");//This code is not exicute because after return statement code is not work
}
const result = addTwoNumbers(3, null);
//console.log("Result: ", result);

function loginUserMessage(username = "Mit") {
    if(username === undefined) { //!username
        console.log("Please enter a username..");
        return;
    }
    else if(username === "") {
        console.log("Username is empty..");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Souvik"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


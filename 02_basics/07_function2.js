// function calculateCartPrice(...num1) {
//     return num1;
// };
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
};
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Souvik",
    prices: 199
};

function handleObject(anyObject) {
    console.log(`Usernmae is ${anyObject.username} and price is ${anyObject.price}`);
};
// handleObject(user);
handleObject({
    username: "Mit",
    price: 299
});

const myNewArray = [200, 400, 100];
function returnSecondValue(getArray) {
    return getArray[1];
};
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100]));


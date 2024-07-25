function one() {
    const userName = "Souvik";

    function two() {
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

if(true) {
    const userName = "Souvik";
    if(userName === "Souvik") {
        const website = "youtube";
        console.log(userName + " " + website);
    }
    // console.log(website);
}
// console.log(userName);

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

addTwo(5); //Get Error Because Before Not Implement
const addTwo = function(num) {
    return num + 2;
}

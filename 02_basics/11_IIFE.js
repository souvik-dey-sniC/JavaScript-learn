// Immediately Invoked Function Expressions(IIFE)
(function chai() {
    console.log(`DB CONNECTED..`);
})();

//IIFE Syntax
( (name) => {
    console.log(`DB CONNECTED TWO.. ${name}`);
})("Souvik");

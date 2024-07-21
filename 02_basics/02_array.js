const marvelHeros = ["Iron Man", "Thor", "Captain America"];
const dcHeros = ["Superman", "Flash", "Batman"];
//marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros =  marvelHeros.concat(dcHeros);
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

// const anotherArray= [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]];
// const usableAnotherAraay = anotherArray.flat(Infinity);
// console.log(usableAnotherAraay);

// console.log(Array.isArray("Souvik"));
// console.log(Array.from("Souvik"));
// console.log(Array.from({name: "Souvik"})); // Interesting Array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(typeof Array.of(score1, score2, score3));
console.log(Array.of(score1, score2, score3));

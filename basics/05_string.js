const name = "Souvik";
const repoCount = 50;
//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//String Declare
const gamerName = new String('Souvik-Dey-com');
console.log(gamerName);
console.log(gamerName[1]);
console.log(gamerName.__proto__);
console.log(gamerName.length);
console.log(gamerName.toUpperCase());
console.log(gamerName.toLowerCase());
console.log(gamerName.charAt(3));
console.log(gamerName.indexOf('k'));
//********** */
const newString = gamerName.substring(0, 4);
console.log(newString);
//*********** */
const anotherString = gamerName.slice(-13, 4);
console.log(anotherString);
//********** */
const newStringOne = "     Soivik     ";
console.log(newStringOne);
console.log(newStringOne.trim());
//********** */
const url = "https://souvik.com/souvik%20dey";
console.log(url.replace('%20', '-'));
console.log(url.includes('souvik'));
console.log(url.includes('isthere'));
//********** */
console.log(gamerName.split('-'));

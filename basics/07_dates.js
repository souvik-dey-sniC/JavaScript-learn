let myDate = new Date();
// console.log(typeof(myDate));
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2024, 6, 21, 9, 0);
let myCreatedDate = new Date("07-21-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());

let d = newDate.toLocaleString('default', {
    weekday: "long",
});
//console.log(d);


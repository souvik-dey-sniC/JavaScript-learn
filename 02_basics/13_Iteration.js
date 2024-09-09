// for(let i=0; i<=10; i++) {
//     const ele = i;
//     if(ele == 5) {
//         console.log("5 is best number");
//     }
//     console.log(ele);
// }

// for(let i=0; i<=10; i++) {
//     console.log(`Outer loopvalue : ${i}`);
//     for(let j=0;j<=10;j++) {
//         //console.log(`Inner loop value ${j} and Inner loop ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }

//print Array
// let myArray = ['flash', 'batman', 'superman'];
// console.log(myArray.length);
// for(let index=0; index<myArray.length; index++) {
//     const ele = myArray[index];
//     console.log(ele);
// }

//Keywords
for(let index=1; index<=20; index++) {
    if(index == 5) {
        console.log("Detected 5");
       //break;
        continue;
    }
    console.log(`Value of i is ${index}`);
}


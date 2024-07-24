//const tinderuser = new Object(); //Singleton Object

const tinderuser = {};//Non-Singleton
tinderuser.id = "123abc";
tinderuser.name = "Souvik";
tinderuser.isLoggedIn = false;
console.log(tinderuser);

const regularUser = {
    email: "souvik13@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Souvik",
            lastName: "Dey"
        }
    }
}
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullname);
console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4:"d"};
//Step 1 to join object
//const obj3 = {obj1, obj2};
//console.log(obj3);
//Step 2 to join object
//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);
//Step 3 to join object
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        name: "Souvik"
    },
    {
        id: 2,
        name: "Biplab"
    },
    {
        id: 3,
        name: "Debayan"
    }
];
console.log(users[0].name);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));

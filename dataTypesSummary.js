// primitive dataTypes
//  7 types : String Number Boolean null undefined Symbol BigInt

let id = Symbol('123')
let anotherId = Symbol('123')
//  console.log( id === anotherId)

const BigNumber = 123457678990n


// reference DataTpes
// Array Objects Functions

const MyAry = ['zammar', 'ali', 'bilal'];
let Myobj = {
    Name : "zammmar",
    age : 20 ,
}

let MyFunc = function(){
    comsole.log("JS WORLD");
}

console.log(typeof MyAry)


// stack (primitive) , heap ( non-primitive)

let UserName= "zammar ahmar"
let anotherName = UserName
anotherName = "muhammad zammar"
console.log(anotherName)
console.log(UserName)
//  In stack primitive dataType data is given in copies so the original data cant be changed


let myInfo ={
    email : 'zammar@mail.com',
    password : '12345'
}
let Info2 = myInfo
Info2.email="ali@mail.com";
    

console.log(Info2.email)
console.log(myInfo.email)

// In heap ( non-primitive) u the refernce of the data so alteration affects the og data type


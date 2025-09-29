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
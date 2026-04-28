
// falsy values
// false ,0,-0,BigInt 0n,"",null,undefined,NaN


// truthy values 
// "0", "   ","false", [],{},function(){}


const obj = {}
if (Object.keys(obj).length===0) {
    console.log("object is empty");
    
}

// Nullish Collescing Operator (??): null undefined
// safety check for null n undefined datatype .


let val1,val2,val3;
val1= 5??10 
val2=null??10
val3=undefined??10
console.log(val1);
console.log(val2);
console.log(val3);


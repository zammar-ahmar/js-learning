
const mSym =Symbol("###@@@")

const obj ={
    name : "ali",
    age : "20",
    city :"RWP",
    [mSym]: "@@@",
    class : "middle-class",
    "email" : "ali@akacncn.com",
    

}


// Object.freeze(obj)
// Object.freeze() is a method in JavaScript that locks an object so it can no longer be 
// changed in any way. After freezing, its properties stay exactly as they are,
//  meaning you can’t modify them, remove them, or add new ones.
// obj.login = false;
// console.log(obj);
// console.log(obj.age); // method use for value called in simple way
// console.log(obj["email"]); //methods use for value called by string
// console.log( obj[mSym]); // mwthod to use for symbols

obj.greet = function(){
    console.log("hello JS wrld")
}

obj.greet1= function(){
    console.log(`hello wrld, ${this.city}`)}
     
console.log(obj.greet());
console.log(obj.greet1());
myArr =[1,2,3,4,5];
console.log(myArr);

myArr.push(6); // add new variable at the end of array
myArr.pop(); // removes last one variable of an array
myArr.unshift(7) // adds a variable at the start of an array
myArr.shift() // removes the first variable of an array
const newArr= myArr.join()  // converts array in to strings
console.log(myArr);
console.log(newArr);

myArr =[1,2,3,4,5];

//  slice & splice 
console.log("A",myArr);
// slice() is a method that returns a shallow copy of a portion of an array 
// into a new array without modifying the original array.

const mna1 = myArr.slice(2,4) // call by index for both
console.log("B" , myArr);
 console.log(mna1);
// splice() is a method that changes the original array
//  by adding, removing, or replacing elements, and returns the removed elements.

const mna3 = myArr.splice(2,4);
 console.log(mna3);
 
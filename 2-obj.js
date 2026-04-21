const GTAuser = {}
GTAuser.id ="1234"
GTAuser.name="xam"
GTAuser.logIn=true


// const IGIuser={
//      name: "ali",
//      userId:{ 

//         id:"123" ,
    
//         email:
//         "ali@google.com"
     
     
//     }    

// }

// console.log(IGIuser.name?.id);



const obj1 ={1:"a ",2:"b"}
const obj2 ={3:"c ",4:"d"}
//`Object.assign()` in JavaScript is a method that copies the properties of one or more source 
// objects into a target object and returns the updated target object.

// const obj3 =Object.assign(obj1,obj2)

const obj3={...obj1,...obj2} // spread method 

console.log(obj3);
    

const userZ =[

{
    id: 123 ,
    email:"@@@"
},
{
    id: 123 ,
    email:"@@@"
},
{
    id: 123 ,
    email:"@@@"
}
]

console.log(userZ[1].email)

console.log(Object.keys(GTAuser));
// Object.keys() in JavaScript is a method that 
// returns an array of all the property names (keys) of an object.

console.log(Object.values(GTAuser));
// Object.values() in JavaScript is a method that 
// returns an array of all the property values of an object.

console.log(Object.entries(GTAuser));// gives both keys n values 
// `Object.entries()` in JavaScript is a method that 
// returns an array of an object’s key–value pairs, where each pair is in its own array.



















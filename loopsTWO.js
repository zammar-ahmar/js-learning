
// forEach() method executes a provided function once for each array element.                            

const loop =["java","python","c++","ruby","javascript"]

////////////////////////////////////

loop.forEach(function(item){
    // console.log(item)
})

///////////////////////////////////////

loop.forEach((item) => {
    // console.log(item)
})

////////////////////////////////////////////

function print(item){
    // console.log(item)
}       

loop.forEach(print)



const Arr=[
    {
    name:"john",
    age:30
    },

    {
    name:"ali",
    age:33
    },

    {
    name:"raza",
    age:31
    }
]

Arr.forEach(function(item){
    console.log(item.name)
})
// or                   ////    /////           /////           ////            //  //  
Arr.forEach((item) => {
    console.log(item.age)
})
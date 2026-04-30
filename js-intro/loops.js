// for (let zack = 0; zack <= 10; zack++) {
//     const element = zack;
//    if (zack==7) {
//     console.log("zack was once 7");
    
//    }
     
//     console.log(element);
//     }



// for (let dex = 0; dex <= 10; dex++) {
//     // console.log(`dex is : ${dex}`); 
    
//    for (let ind = 0; ind<= 10; ind++) {
//         // console.log(`ind is : ${ind}`);

//         console.log(`${dex}  *  ${ind} =  ${dex*ind}` );
        


//    }
    
// }
 
// // break n continue statements
  
// for (let index = 1; index <= 20 ; index++) {
//     if (index == 10) {
//         console.log("index was once 10");
//         break
//     }
//     console.log(`index value : ${index}`);
    
// }


for (let index = 1; index <= 20 ; index++) {
    if (index == 10) {
        // console.log("index was once 10");
        continue
    }
    // console.log(`index value : ${index}`);
    
}




/////////////////////////////  WHILE LOOP   ////////////////////////////

let myArray = [1,2,3,4,5,6,7,8,9,10]
let arr = 0;
while (arr < myArray.length) {
    // console.log(myArray[arr]);
    arr++
}


let salary = 1000;
do { 
    console.log(`ur salary is ${salary}`);
    
    salary = salary + 1000;
} while (salary <= 10000);
 

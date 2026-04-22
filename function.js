

// In JavaScript, a function is a reusable block of code that runs when you call it,
//  often taking input (called parameters) and returning an output (called a return value).

// function callme(){
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// }
//  console.log(callme())


//  function addition(numb1,numb2){
//      console.log(numb1 + numb2);
//       }

    //   console.log(addition(6,7))
    //   console.log(addition(6,"7"))
    //   console.log(addition(6,null))


     function addition(numb1,numb2){
    //  let add = numb1 + numb2
    //  return add 
    // after return is added any code after that in func wont be working 
    return numb1 + numb2

}

      const add = addition(6,7)
      console.log(add)



      function user(userName= "xzx"){
        if(!userName ){
            console.log("pls enter ur username");
            return
            
        }
        return `${userName} just logged in`

      }

    //   console.log(user("zammar"));
      console.log(user())    ;



//  spread/rest operator in  func denoted by ... adds all the values in one single array
      function calculateCartPrice(...numb1){
       return numb1

      }



  console.log(calculateCartPrice(200,300,400,500));


  const user2 = {
    userName : "ali",
    age : 66
  }
   function sourceObj(obj1){
    console.log( `ur name is ${obj1.userName} n ur age is ${obj1.age}`)
   }

   console.log(sourceObj(user2))
      


const user ={
    username: "zammar",
    payment: 1000,
    

    introTxt : function(){
        console.log(`${this.username}, is available`);
        console.log(this);
        
    }
}
user.introTxt()
user.username="ammar"
user.introTxt()

// console.log(this); the current reference of this in chrome is windows


//++++++++++++++++++++++++++++++++++++++++++++++++++++//
 //()=>{} syntax oF ARROW FUNCTION
 const zam = (z1,z2)=>{
    return z1+z2
 }


 const zamm= (z1,z2)=> (z1+z2)
 console.log(zam(3,4));
 console.log(zamm(3,4));
 

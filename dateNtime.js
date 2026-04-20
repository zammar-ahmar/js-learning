// Dates
let myDate = new Date();
console.log(myDate);
// show current time n date in diff ways
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log( typeof myDate);


//  customising time n date to ur need 
let customDate = new Date(2005 , 4 ,31 , 17 , 30 , 3 );
let customDate2 = new Date('01-01-2024' );
 console.log(customDate.toLocaleString());
 console.log(customDate2.toLocaleString());
 


//  time stamp
let TimeStamp = Date.now()
console.log(TimeStamp);
console.log(Math.round(Date.now()/1000));


console.log(customDate2.getTime() );

let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getMonth() + 1);
// months are array derived so the month count starts from 0 as janauary
console.log(NewDate.getFullYear());
  
NewDate.toLocaleString("default" , {  era :"long"}) 


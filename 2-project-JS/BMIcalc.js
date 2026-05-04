
/* BMI Calculator JavaScript Code */

 const form = document.querySelector('form');
 form.addEventListener('submit', (event) =>  {
     event.preventDefault()
    
   const weight= document.querySelector("#weight").value
   const height= document.querySelector("#height").value
   let result = document.querySelector("#result");
 
   if (weight > 0 && height > 0) {
     const bmi = weight / ((height / 100) * (height / 100));
     result.textContent = alert(`Your BMI is ${bmi.toFixed(2)}`);
   } else {
     result.textContent = "Please enter valid weight and height.";
   }
    
    });
const table= document.getElementById("table");
const form= document.getElementById("number-form");
const numberInput= document.getElementById("number-input");

form.addEventListener("submit", function(event) {
      event.preventDefault();

      const number = parseInt(numberInput.value);

      if (isNaN(number)) {
        table.innerHTML = "Please enter a valid number";
        return;
      }

      let output = "";

      for (let i = 1; i <= 10; i++) {
        output += `${number} x ${i} = ${number * i}<br>`;
      }

      table.innerHTML = output;
    });     

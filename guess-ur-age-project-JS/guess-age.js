function guessAge() {
            const r3 = parseInt(document.getElementById('remainder3').value);
            const r5 = parseInt(document.getElementById('remainder5').value);
            const r7 = parseInt(document.getElementById('remainder7').value);

            // Calculate the age using the remainders
            let age = (r3 * 70 + r5 * 21 + r7 * 15) % 105;

            document.getElementById('result').textContent = `Your age is: ${age}`;
        }
  
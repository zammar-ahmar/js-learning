const form = document.getElementById('emi-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const p=document.getElementById('principal').value;
const r=document.getElementById('rate').value;
const t=document.getElementById('time').value;
const result=document.getElementById('result');

if(p > 0 && r > 0 && t > 0){
    const emi = (p * r * t) / 100;
    result.textContent = `The simple interest is ${emi.toFixed(2)}`;
}else{
    result.textContent = "Please enter valid principal, rate and time.";
}
});


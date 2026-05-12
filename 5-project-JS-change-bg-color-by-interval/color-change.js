// generate a random color 
const randomColor = () => {
    const hex = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.round(Math.random() * 16)];
    
    }
    return color;
}
  let intervalId;
let start = document.getElementById('start');
start.addEventListener('click', () => {
     intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 500);
})
let stop = document.getElementById('stop');
stop.addEventListener('click', () => {    clearInterval(intervalId);
})
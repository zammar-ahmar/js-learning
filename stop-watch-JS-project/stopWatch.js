const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

//////////////////////////////////////////////////////////////////////////
startBtn.addEventListener("click", () => {

  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(updateTime, 10);
});

/////////////////////////////////////////////////////////////
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});

////////////////////////////////////////////////
resetBtn.addEventListener("click", () => {
  clearInterval(timer);

  ms = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  display.innerText = "00:00:00:00";
});

function updateTime() {

  ms++;

  
  if (ms == 100) {
    ms = 0;
    seconds++;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  //we need to show the time with two digits, so we will add a "0" before the number if it is less than 10
  let h = hours < 10 ? ("0" + hours) : hours;
  let m = minutes < 10 ?( "0" + minutes) : minutes;
  let s = seconds < 10 ? ("0" + seconds) : seconds;
  let milli = ms < 10 ? ("0" + ms) : ms;
  //we need to show the time with two digits, so we will add a "0" before the number if it is less than 10

  display.innerText = `${h}:${m}:${s}:${milli}`;
}
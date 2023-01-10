let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let millisecondTime;
const daysScreen = document.getElementById("days");
const hoursScreens = document.getElementById("hours");
const minutesScreens = document.getElementById("minutes");
const secondsScreens = document.getElementById("seconds");
const millisecondsScreens = document.getElementById("millisecond");
const saveTime = document.getElementById("saveTime");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");
const btnSave = document.getElementById("save");

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
btnSave.addEventListener("click", saveTimeFn);

function startTimer() {
  timer = setInterval(() => {
    if (hours == 24 && minutes == 59 && seconds == 59) {
      days++;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else if (minutes == 59 && seconds == 59) {
      hours++;
      minutes = 0;
      seconds = 0;
    } else if (seconds == 59) {
      minutes++;
      seconds = 0;
    } else {
      seconds++;
    }
    changeTimeScreen();
  }, 1000);
  millisecondsFn();
}

function pauseTimer() {
  clearInterval(timer);
  clearInterval(millisecondTime);
}

function resetTimer() {
  clearInterval(timer);
  clearInterval(millisecondTime);
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  changeTimeScreen();
  millisecondsScreens.textContent = '00';
}

function millisecondsFn() {
  millisecondTime = setInterval(() => {
    if (milliseconds == 99) {
      milliseconds = 0;
    } else {
      milliseconds++;
    }

    millisecondsScreens.textContent =
      milliseconds < 10 ? "0" + milliseconds : milliseconds;
  }, 10);
}

function saveTimeFn() {
  const pEl = document.createElement("p");
  pEl.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  saveTime.appendChild(pEl);
}

function changeTimeScreen() {
  daysScreen.textContent = days < 10 ? "0" + days : days;
  hoursScreens.textContent = hours < 10 ? "0" + hours : hours;
  minutesScreens.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsScreens.textContent = seconds < 10 ? "0" + seconds : seconds;
}

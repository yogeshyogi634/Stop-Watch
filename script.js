let timer = document.getElementById("timer");
let hour = 0;
let min = 0;
let sec = 0;
let stopTime = true;

//start timer
const startTimer = () => {
  if (stopTime === true) {
    stopTime = false;
    timeCycle();
  }
};

//stop timer
const stopTimer = () => {
  if (stopTime === false) {
    stopTime = true;
  }
};

//timeCycle
const timeCycle = () => {
  if (stopTime === false) {
    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec + 1;

    //limiting to 60 seconds
    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }

    //limiting to 60 minutes
    if (min === 60) {
      hour = hour + 1;
      sec = 0;
      min = 0;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(() => timeCycle(), 1000);
    //or
    // setTimeout("timeCycle()" , 1000)
  }
};

//reset timer
const resetTimer = () => {
  timer.innerHTML = "00:00:00";
  stopTime = true;
  hour = 0;
  min = 0;
  sec = 0;
};

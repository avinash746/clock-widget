function rotateSecondHand() {
  const currDate = new Date();
  const seconds = currDate.getSeconds();
  const secondHand = document.getElementsByClassName("second-hand")[0];
  const degrees = (seconds / 60) * 360;

  secondHand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(rotateSecondHand, 1000);
rotateSecondHand();

function rotateMinuteHand() {
  const currDate = new Date();
  const minutes = currDate.getMinutes();
  const seconds = currDate.getSeconds();
  const minuteHand = document.getElementsByClassName("min-hand")[0];
  const degrees = ((minutes * 60 + seconds) / 3600) * 360;
  minuteHand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(rotateMinuteHand, 60000);
rotateMinuteHand();

function rotateHourHand() {
  const currDate = new Date();
  const hours = currDate.getHours();
  const minutes = currDate.getMinutes();
  const hourHand = document.querySelector(".hour-hand");

  const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(rotateHourHand, 3600000);
rotateHourHand();

function digitalTime() {
  const currDate = new Date();
  let hours = currDate.getHours();
  let minutes = currDate.getMinutes();
  let seconds = currDate.getSeconds();

  let meridian = "";

  if (hours > 12) {
    hours = hours - 12;
    meridian = "PM";
  } else {
    meridian = "PM";
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const element = document.querySelector(".digital");
  element.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;
}

setInterval(digitalTime, 1000);
digitalTime();

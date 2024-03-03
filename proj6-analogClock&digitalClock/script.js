let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function timeFuntion() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  //   store 12 hour instead of 24
  let hour12;

  let hRotation = 30 * h + m / 2;
  let mRotation = 6 * m;
  let sRotation = 6 * s;

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
  if (h > 12) {
    hour12 = h % 12;
  }
  if (hour12 < 10) {
    document.querySelector("#digital-hour").innerHTML = `0${hour12}`;
  } else {
    document.querySelector("#digital-hour").innerHTML = hour12;
  }

  if (m < 10) {
    document.querySelector("#digital-min").innerHTML = `0${m}`;
  } else {
    document.querySelector("#digital-min").innerHTML = m;
  }

  if (s < 10) {
    document.querySelector("#digital-sec").innerHTML = `0${s}`;
  } else {
    document.querySelector("#digital-sec").innerHTML = s;
  }
  if (h > 12) {
    document.querySelector("#ampm").innerHTML = "PM";
  } else {
    document.querySelector("#ampm").innerHTML = "AM";
  }
}
setInterval(timeFuntion, 1000);

let hs = document.getElementById("hour");
let ms = document.getElementById("minute");
let ss = document.getElementById("second");
let ap = document.getElementById("ap");

function updateTime() {
  let currentTime = new Date();
  hs.innerText = currentTime.getHours();
  ms.innerText = currentTime
    .getMinutes()
    .toLocaleString("en-Us", { minimumIntegerDigits: 2 });
  ss.innerText = currentTime
    .getSeconds()
    .toLocaleString("en-Us", { minimumIntegerDigits: 2 });
  ap.innerText = currentTime.getHours() < 12 ? "AM" : "PM";
}

setInterval(updateTime, 1000);

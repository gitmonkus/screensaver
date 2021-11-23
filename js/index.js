const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");
const countdown = document.getElementById("countdown");
const imageEl = document.getElementById("image");

// 5 second countdown timer
let count;
let timer;
let idle;

const chickenArray = [
  "../img/chicken/1.JPG",
  "../img/chicken/2.JPG",
  "../img/chicken/3.JPG",
  "../img/chicken/4.JPG",
  "../img/chicken/5.JPG",
];

function imageArray() {
  let imgNumber = 0;
  let imgLength = chickenArray.length - 1;
  console.log(imgNumber);
  console.log(imgLength);
  const nextEl = document.getElementById("next");
  const backEl = document.getElementById("back");

  nextEl.addEventListener("click", function () {
    if (imgNumber < imgLength) {
      imgNumber++;
      imageEl.innerHTML = `<img src="${chickenArray[imgNumber]}" alt="house">`;
      console.log(`Next button -- imgNumber = ${imgNumber}`);
    }
  });

  backEl.addEventListener("click", function () {
    if (imgNumber > 0) {
      imgNumber--;
      imageEl.innerHTML = `<img src="${chickenArray[imgNumber]}" alt ="house">`;
      console.log(`Back button -- imgNumber = ${imgNumber}`);
    }
  });
}

// This function counts down from 5 - 0
// Send the count to the paragraph inside the orb
// Stops the timer when a - count
// Clears the count from the paragraph inside the orb
// Adds animation to the screensaver and orb

function theCountDown() {
  countdown.textContent = count;
  count--;
  if (count === -1) {
    clearInterval(timer);
    screensaver.style.animation = "screensaver 13s linear infinite alternate";
    orb.style.animation = "orb 7s linear infinite alternate";
    countdown.textContent = "STOP";
    countdown.style.fontSize = "20px";
  }
}
// Call theCountDown function to start the timer,
//counting down every 1000ms or 1 second
function timerCount() {
  count = 5;
  console.log(`From timerCount function.  count = ${count}`);
  timer = setInterval("theCountDown()", 1000);
}
// timer = setInterval("theCountDown()", 1000);

orb.addEventListener("mousemove", function () {
  screensaver.style.animation = "screensaver 0s";
  orb.style.animation = "orb 0s";
  // idleTime();
});

// NOT SURE YET.... trying to figure out idle...
// function idleTime() {
//   window.removeEventListener("mousemove", null);
//   console.log(`Starting Idle timer.  count = ${count}`);
//   idle = 5;
//   while (idle > 0) {
//     idle--;
//     if (idle === 0) {
//       setInterval(timerCount, 5000);
//     }
//   }
// }

timerCount();
imageArray();

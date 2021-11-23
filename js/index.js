const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");
const countdown = document.getElementById("countdown");

// 5 second countdown timer
let count = 5;
let timer;

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
    countdown.textContent = "";
  }
}
// Call theCountDown function to start the timer,
//counting down every 1000ms or 1 second
function timerCount() {
  console.log(`From timerCount function.  count = ${count}`);
  timer = setInterval("theCountDown()", 1000);
}
// timer = setInterval("theCountDown()", 1000);

window.addEventListener("mousemove", function () {
  screensaver.style.animation = "screensaver 0s";
  orb.style.animation = "orb 0s";
});

// NOT SURE YET.... trying to figure out idle...
function timeOut() {
  count = 5;
  console.log(`From mousemove.  count = ${count}`);
  setTimeout(timerCount, 2000);
}

timerCount();

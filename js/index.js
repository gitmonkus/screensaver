const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");
const countdown = document.getElementById("countdown");
const imageEl = document.getElementById("image");

let count;
let timer;
let idle;

// Image display with Back and Next buttons
const chickenArray = [
  "img/chicken/1.JPG",
  "img/chicken/2.JPG",
  "img/chicken/3.JPG",
  "img/chicken/4.JPG",
  "img/chicken/5.JPG",
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
      imageEl.innerHTML = `<img src="${chickenArray[imgNumber]}" alt="chicken">`;
      // console.log(`Next button -- imgNumber = ${imgNumber}`);
    }
  });

  backEl.addEventListener("click", function () {
    if (imgNumber > 0) {
      imgNumber--;
      imageEl.innerHTML = `<img src="${chickenArray[imgNumber]}" alt ="chicken">`;
      // console.log(`Back button -- imgNumber = ${imgNumber}`);
    }
  });
}

// This function counts down from 5 - 0
// Send the count to the paragraph inside the orb
// Stops the timer when a - count
// Clears the count and adds STOP inside the orb
// Adds animation to the screensaver and orb

function theCountDown() {
  countdown.textContent = count;
  count--;
  if (count === -1) {
    clearInterval(timer);
    screensaver.style.animation = "screensaver 13s linear infinite alternate";
    orb.style.animation = "orb 7s linear infinite alternate";
    countdown.textContent = "STOP";
    countdown.style.fontSize = "40px";
  }
}

// Starts the timer and calls theCountDown() to get it all started
function timerCount() {
  count = 5;
  // console.log(`From timerCount function.  count = ${count}`);
  timer = setInterval("theCountDown()", 1000);
}

// Mouseover the orb to stop the animation
// Call timerCount to start all over again
orb.addEventListener("mouseover", function () {
  screensaver.style.animation = "screensaver 0s";
  orb.style.animation = "orb 0s";
  countdown.style.fontSize = "100px";
  window.location.reload();
});

// Call theCountDown function to start the timer
//counting down every 1000ms or 1 second
timerCount();

// Call the imageArray, so that the Back and Next buttons function
imageArray();

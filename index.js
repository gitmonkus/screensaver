const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");
const countdown = document.getElementById("countdown");

// start an (optional) 5 min timer on pageload
// orb.addEventListener("pageshow", function () {
for (let i = 5; i >= 0; i--) {
  console.log(i);
  countdown.textContent = i;
  if (i === 0) {
    // orb.className("orb");
    console.log("I'm at 0");
  }
}
// });

console.log("Page refreshed!");

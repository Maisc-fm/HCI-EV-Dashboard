function loadScreen(components) {
  fetch(`components/${components}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

function showBottomBar() {
  document.querySelector(".bottom-bar").classList.add("show");
}

/* CLOCK */
document.addEventListener("DOMContentLoaded", () => {

  loadScreen("dashboard");
  startClock();

  // STEP 1: show bottom bar after delay
  setTimeout(() => {
    document.querySelector(".bottom-bar")?.classList.add("show");
  }, 2000);

  // STEP 2: hide clock after same delay
  setTimeout(() => {
    const clock = document.getElementById("clock-screen");
    if (clock) {
      clock.classList.add("hide");
    }
  }, 5000);

});


function startClock() {
  function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    const el = document.getElementById("clock-time");

    if (el) {
      el.innerText = `${h}:${m}:${s}`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}


setTimeout(() => {
  // optional: play startup sound here
}, 1000);

/* Climate logic */
let temp = 24;

function changeTemp(val) {
  temp += val;
  document.getElementById("temp").innerText = temp;
}

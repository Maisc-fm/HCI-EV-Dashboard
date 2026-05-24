const topBar = document.getElementById("top-bar");

function showBottomBar() {
  document.querySelector(".bottom-bar")?.classList.add("show");
}

setTimeout(() => {
  console.log("Bottom bar triggered");
  showBottomBar();
}, 1500);

function loadScreen(name) {

  const content =
    document.getElementById("content");

  fetch(`components/${name}.html`)
    .then(res => res.text())
    .then(data => {

      content.innerHTML = data;

      const topBar =
        document.getElementById("top-bar");

      // hide top bar only on dashboard
      if (name === "dashboard") {
        topBar.classList.add("hidden");
      } else {
        topBar.classList.remove("hidden");
      }
    });
}

/* =========================
   CAR SIMULATION
========================= */
let speedValue = 0;
let batteryValue = 78;

function startCarSimulation() {

  setInterval(() => {

    const speedEl =
      document.getElementById("speed");

    if (speedEl) {
      speedValue =
        Math.floor(Math.random() * 120);

      speedEl.textContent =
        `${speedValue} km/h`;
    }

  }, 2000);


  setInterval(() => {

    const batteryEl =
      document.getElementById("battery");

    if (batteryEl) {
      batteryValue -= 0.1;

      if (batteryValue < 0) {
        batteryValue = 100;
      }

      batteryEl.textContent =
        `${batteryValue.toFixed(0)}%`;
    }

  }, 3000);
}

/* =========================
   TOP BAR CLOCK
========================= */
function startTopClock() {

  function update() {

    const topTime =
      document.getElementById("top-time");

    // prevents crash
    if (!topTime) return;

    const now = new Date();

    const h =
      String(now.getHours()).padStart(2, "0");

    const m =
      String(now.getMinutes()).padStart(2, "0");

    topTime.textContent =
      `${h}:${m}`;
  }

  update();
  setInterval(update, 1000);
}

/* =========================
   STARTUP CLOCK SCREEN
========================= */
function startClock() {

  function updateClock() {

    const clock =
      document.getElementById("clock-time");

    if (!clock) return;

    const now = new Date();

    const h =
      String(now.getHours()).padStart(2, "0");

    const m =
      String(now.getMinutes()).padStart(2, "0");

    const s =
      String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
      `${h}:${m}:${s}`;
  }

  // run instantly
  updateClock();

  // keep updating
  setInterval(updateClock, 1000);
}

/* =========================
   BOTTOM BAR
========================= */
function showBottomBar() {
  document
    .querySelector(".bottom-bar")
    ?.classList.add("show");
}

/* =========================
   CLIMATE
========================= */
let temp = 24;

function changeTemp(val) {
  temp += val;

  const tempEl =
    document.getElementById("temp");

  if (tempEl) {
    tempEl.innerText = temp;
  }
}

/* =========================
   APP STARTUP
========================= */
document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadScreen("dashboard");

    startClock();
    startTopClock();
    startCarSimulation();

    // show bottom bar
    setTimeout(() => {
      showBottomBar();
    }, 1500);

    // hide intro clock
    setTimeout(() => {
      const clock =
        document.getElementById(
          "clock-screen"
        );

      if (clock) {
        clock.classList.add("hide");
      }

    }, 5000);
  }
);
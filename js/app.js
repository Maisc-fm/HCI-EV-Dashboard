/* =========================================
   LOAD SCREEN
========================================= */

function loadScreen(name) {

  const content =
    document.getElementById("content");

  fetch(`components/${name}.html`)
    .then(res => res.text())
    .then(data => {

      content.innerHTML = data;

      const topBar =
        document.getElementById("top-bar");

      if (name === "dashboard") {
        topBar.classList.add("hidden");
      } else {
        topBar.classList.remove("hidden");
      }

      initNavigationPage();
    });
}

/* =========================================
   BOTTOM BAR
========================================= */

function showBottomBar() {

  document
    .querySelector(".bottom-bar")
    ?.classList.add("show");
}

/* =========================================
   CAR SIMULATION
========================================= */

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

/* =========================================
   TOP CLOCK
========================================= */

function startTopClock() {

  function update() {

    const topTime =
      document.getElementById("top-time");

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

/* =========================================
   STARTUP CLOCK
========================================= */

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

  updateClock();

  setInterval(updateClock, 1000);
}

/* =========================================
   CLIMATE CONTROL
========================================= */

let temp = 24;

function changeTemp(val) {

  temp += val;

  const tempEl =
    document.getElementById("temp");

  if (tempEl) {
    tempEl.innerText = temp;
  }
}

/* =========================================
   NAVIGATION PAGE
========================================= */

function initNavigationPage() {

  const destinations =
    document.querySelectorAll(".destination");

  const continueBtn =
    document.querySelector(".continue-btn");

  let selectedDestination = "";

  destinations.forEach(destination => {

    destination.addEventListener("click", () => {

      destinations.forEach(item =>
        item.classList.remove("selected")
      );

      destination.classList.add("selected");

      selectedDestination =
        destination.textContent.trim();
    });
  });

  if (continueBtn) {

    continueBtn.addEventListener("click", () => {

      if (selectedDestination === "") {

        alert("Please select a destination.");

      } else {

        alert(
          "Destination selected: " +
          selectedDestination
        );

        loadScreen("charging-routes");
      }
    });
  }

  const menus =
    document.querySelectorAll(".menu");

  menus.forEach(menu => {

    menu.addEventListener("click", () => {

      menus.forEach(item =>
        item.classList.remove("active")
      );

      menu.classList.add("active");
    });
  });

  const stationCards =
    document.querySelectorAll(".station-card");

  stationCards.forEach(card => {

    card.addEventListener("click", () => {

      stationCards.forEach(item =>
        item.classList.remove("active")
      );

      card.classList.add("active");
    });
  });

  const startBtn =
    document.querySelector(".start-btn");

  if (startBtn) {

    startBtn.addEventListener("click", () => {

      alert("Navigation Started");

      loadScreen("navigation");
    });
  }
}

/* =========================================
   APP STARTUP
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadScreen("dashboard");

    startClock();

    startTopClock();

    startCarSimulation();

    setTimeout(() => {
      showBottomBar();
    }, 1500);

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
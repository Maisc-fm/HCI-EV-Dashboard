function loadScreen(screen) {
  fetch(`screens/${screen}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

/* Load default screen */
window.onload = () => {
  loadScreen("home");
};

/* Climate logic */
let temp = 24;

function changeTemp(val) {
  temp += val;
  document.getElementById("temp").innerText = temp;
}

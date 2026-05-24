function loadScreen(components) {
  fetch(`components/${components}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

/* Load default screen */
window.onload = () => {
  loadScreen("dashboard");
};

/* Climate logic */
let temp = 24;

function changeTemp(val) {
  temp += val;
  document.getElementById("temp").innerText = temp;
}

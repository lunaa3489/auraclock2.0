const clock = document.getElementById("clock");
const time = document.getElementById("time");
const amPm = document.getElementById("am-pm");
const switchBtn = document.getElementById("switch-btn");

let is24Hour = false;

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (!is24Hour) {
    let amPmValue = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    amPm.innerText = amPmValue;
    time.innerText = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  } else {
    amPm.innerText = "";
    time.innerText = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  }
}

switchBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  switchBtn.innerText = is24Hour ? "24" : "12";
});

setInterval(updateTime, 1000);

// Scipt to Change Background Image
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-btn");
  const fontButton = document.getElementById("font-btn");
  const body = document.body;

  // Retrieve and apply stored background image
  const storedBackground = localStorage.getItem("backgroundImage");
  if (storedBackground) {
    body.classList.add(storedBackground);
  }

  // Retrieve and apply stored font color
  const storedFontColor = localStorage.getItem("fontColor");
  if (storedFontColor) {
    body.classList.add(storedFontColor);
  }

  // Event listener for the theme button
  themeButton.addEventListener("click", () => {
    let currentBackground = body.className;
    // Define background images
    const backgrounds = [
      "background-image-1",
      "background-image-2",
      "background-image-3"
    ];

    // Get the next background image
    let newIndex =
      (backgrounds.indexOf(currentBackground) + 1) % backgrounds.length;
    let newBackground = backgrounds[newIndex];

    // Update the class and save preference
    body.className = newBackground;
    localStorage.setItem("backgroundImage", newBackground);
  });

  // Event listener for the font button
  fontButton.addEventListener("click", () => {
    if (body.classList.contains("black-theme")) {
      body.classList.remove("black-theme");
      body.classList.add("white-theme");
      localStorage.setItem("fontColor", "white-theme");
    } else {
      body.classList.remove("white-theme");
      body.classList.add("black-theme");
      localStorage.setItem("fontColor", "black-theme");
    }
  });
});
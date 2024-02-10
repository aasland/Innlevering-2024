// Night/Light-mode start

let icon = document.querySelector("#moonIcon");

icon.onclick = function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    icon.src = "bilder/sun.png";
  } else {
    icon.src = "bilder/moon.png";
  }
};

// Night/Light-mode end

// Login start

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const loginClose = document.getElementsByClassName("btn");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

loginClose.onclick = function () {
  wrapper.classList.remove("active-popup");
};

// Login end

// GDPR start

const gdpr = document.querySelector(".gdpr");

window.addEventListener("load", () => {
  gdpr.classList.add("showGdpr");
  gdpr.childNodes[1].classList.add("showGdpr");
});

// GDPR end

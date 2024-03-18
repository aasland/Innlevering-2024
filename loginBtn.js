// Login start

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const loginBtn = document.querySelector(".btn");

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

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("active-popup");
});

// Login end

// Change icon start

switchLoginString = function () {
  btnPopup.innerHTML = `<ion-icon name="log-out"></ion-icon> Log out`;
};

// Change icon end

// Change function start

let btnPressCount = 0;

let PressCount = function () {
  btnPressCount = btnPressCount + 1;
};

if (btnPressCount == 1) {
  document.body.style.color = "red";
}

console.log(btnPressCount);

// Change function end

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

// Login end

// GDPR start

const gdpr = document.querySelector(".gdpr");
let gdprPopupCloseBtn = document.querySelector(".gdprPopupCloseBtn");
let godtaBtn = document.querySelector(".godtaBtn");

window.addEventListener("load", () => {
  gdpr.classList.add("showGdpr");
  gdpr.childNodes[1].classList.add("showGdpr");
});

const closeGdprPopup = function () {
  if (gdpr.classList.contains("showGdpr")) {
    gdpr.classList.remove("showGdpr");
  }
};

gdprPopupCloseBtn.addEventListener("click", closeGdprPopup);

const samtykkeHeader = document.querySelector("#SamtykkeH2");
const samtykkeP1 = document.querySelector("#SamtykkeP1");
const samtykkeP2 = document.querySelector("#SamtykkeP2");
const samtykkeUl = document.querySelector("#SamtykkeUl");
const btnContainer = document.querySelector("#btnContainer");
const newUl = document.getElementById("newUl");

const endreH2Godta = function () {
  samtykkeHeader.innerHTML = "Vet du hva du godkjente til nå?";
  samtykkeP1.innerHTML =
    "Du leste jo nettopp hva slags informasjon vi tar fra deg, eller gjorde du det? Leste du i det hele tatt informasjonen, eller trykket du bare 'Godkjenn alle' av vane?";
  samtykkeP2.innerHTML = "";
  samtykkeUl.innerHTML =
    "Les mer om personvern på vår egen side om personvern.";
  document.querySelector("#SamtykkeUl").style.fontWeight = "600";
  document.querySelector("#SamtykkeUl").style.fontStyle = "normal";
  btnContainer.innerHTML = "";
  document.getElementById("samtykkeBilde").style.display = "none";
  newUl.innerHTML = "";
};

const endreH2Tilpass = function () {
  samtykkeHeader.innerHTML = "Samtykkeinnstillinger";
  samtykkeP1.innerHTML =
    "Klikken trenger ditt samtykke for å kunne behandle persondata for flere formål. Når du klikker “Godta alle” godtar du at Klikken og partnere behandler persondata for formålene under. Du kan håndtere innstillingene nedenfor.";

  samtykkeP2.innerHTML = "";
  samtykkeUl.innerHTML = "";

  document.getElementById("tilpassBtn").style.display = "none";

  if (newUl.classList.contains("active")) {
  } else {
    newUl.classList.add("active");
  }

  document.getElementById("newUl").style.fontStyle = "italic";
};

// GDPR end


const klikkenPluss = document.querySelector("#klikkenPluss");
const klikkenPlussPopup = document.querySelector("#klikkenPlussPopup");
const labels = document.querySelector("#labels");
const inputs = document.querySelector("#inputs");
const paymentBtn = document.querySelector("#paymentBtn");
const fornavn = document.querySelector("#fornavn");
const popupH1 = document.querySelector("#popupH1");
const paidTooSeeMorePage = document.querySelector("#paidTooSeeMorePage");

klikkenPluss.addEventListener("click", () => {
  klikkenPlussPopup.classList.add("active");
});

paymentBtn.addEventListener("click", () => {
  fornavnInput = fornavn.value;
  labels.textContent = "";
  inputs.textContent = "";

  let nyP1 = document.createElement("h3");

  popupH1.appendChild(nyP1);
  nyP1.style.position = "absolute";
  nyP1.style.top = "300px";
  nyP1.style.fontSize = "20px";
  nyP1.style.marginTop = "20px";

  nyP1.textContent = `Tusen takk!`;

  let nyP2 = document.createElement("h3");

  popupH1.appendChild(nyP2);
  nyP2.style.position = "absolute";
  nyP2.style.top = "344px";
  nyP2.style.fontSize = "20px";
  nyP2.style.marginTop = "20px";

  nyP2.textContent = `Informasjonen din er helt trygg hos oss ${fornavnInput} ;)`;

  let miniP = document.createElement("p");
  popupH1.appendChild(miniP);
  miniP.textContent = `Er du sikker på at du leste samtykkeinstillingene godt nok ${fornavnInput}?😅`;
  miniP.style.position = "absolute";
  miniP.style.top = "390px";
  miniP.style.right = "-30px";
  miniP.style.fontSize = "11px";
  miniP.style.padding = "0px";

  paymentBtn.style.display = "none";

  let nyBtn = document.createElement("button");
  nyP2.appendChild(nyBtn);
  nyBtn.textContent = "Trykk for å se nyheten";
  nyBtn.classList.add("pressToNext");
  nyBtn.style.top = "180px";
  nyBtn.style.left = "0px";

  nyBtn.addEventListener("click", () => {
    klikkenPlussPopup.classList.remove("active");
    paidTooSeeMorePage.style.display = "none";
  });
});

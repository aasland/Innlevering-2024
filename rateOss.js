const stars = document.querySelectorAll(".stars ion-icon");
const rateBtn = document.getElementById("ratingBtn");
const myDiv = document.querySelector(".ratingBox");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

let nyP = document.createElement("p");
nyP.textContent = "Tusen Takk!";

rateBtn.addEventListener("click", () => {
  rateBtn.style.display = "none"
  myDiv.appendChild(nyP);

  nyP.style.display = "flex";
  nyP.style.justifyContent = "center";
  nyP.style.marginTop = "20px";
  nyP.style.fontSize = "19px";

});

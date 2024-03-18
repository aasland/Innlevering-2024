const stars = document.querySelectorAll(".stars i");
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

rateBtn.addEventListener("click", () => {
  let nyP = document.createElement("p");
  myDiv.appendChild(nyP);
  nyP.textContent = "Tusen Takk!";

  nyP.style.display = "flex";
  nyP.style.justifyContent = "center";
  nyP.style.marginTop = "20px";
});

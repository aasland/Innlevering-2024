const stars = document.querySelectorAll(".stars ion-icon");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star2, index2) => {
      index1 >= index2
        ? star2.classList.add("active")
        : star2.classList.remove("active");
    });
  });
});

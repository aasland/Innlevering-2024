const stars = document.querySelectorAll(".stars ion-icon");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    star.forEach((star, index2) => {
      index1 >= index2
        ? star.classlist.add("active")
        : star.classlist.remove("active");
    });
  });
});

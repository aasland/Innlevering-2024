const myBox = document.querySelector("#myBox");
const bevegelsesMengde = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= bevegelsesMengde;
        break;

      case "ArrowDown":
        y += bevegelsesMengde;
        break;

      case "ArrowLeft":
        x -= bevegelsesMengde;
        break;

      case "ArrowRight":
        x += bevegelsesMengde;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

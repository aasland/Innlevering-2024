// Cookie Game start

const catcher = document.getElementById("fanger");
const object = document.getElementById("objekt");
const scoreDisplay = document.getElementById("score");
const startGameBtn = document.querySelector("button");
const startScreenContainer = document.querySelector("#startScreenContainer");
const lostPopup = document.getElementById("lostPopup");

let score = 0;
let previousScore = 0;

function moveCatcher(event) {
  const gameArea = document.getElementById("game-area");
  const gameAreaRect = gameArea.getBoundingClientRect();
  const mouseX = event.clientX - gameAreaRect.left;
  const catcherWidth = catcher.offsetWidth;
  const catcherX = mouseX - catcherWidth / 2;

  if (catcherX >= 0 && catcherX <= gameArea.offsetWidth - catcherWidth) {
    catcher.style.left = catcherX + "px";
  }
}

function checkCollision() {
  const catcherRect = catcher.getBoundingClientRect();
  const objectRect = object.getBoundingClientRect();

  if (
    catcherRect.left < objectRect.right &&
    catcherRect.right > objectRect.left &&
    catcherRect.top < objectRect.bottom &&
    catcherRect.bottom > objectRect.top
  ) {
    score++;
    scoreDisplay.innerText = "Score: " + score;
    resetObject();
  }
}

function resetObject() {
  const gameArea = document.getElementById("game-area");
  const randomX = Math.floor(
    Math.random() * (gameArea.offsetWidth - object.offsetWidth)
  );
  object.style.left = randomX + "px";
  object.style.top = "0";
}

function moveObject() {
  const gameArea = document.getElementById("game-area");
  const objectBottom = parseInt(object.style.top) + object.offsetHeight;

  if (objectBottom >= gameArea.offsetHeight) {
    resetObject();
  } else {
    object.style.top = parseInt(object.style.top) + 1 + "px";
    checkCollision();
  }
}

document.addEventListener("mousemove", moveCatcher);

startGameBtn.addEventListener("click", () => {
  const chooseSpeed = document.querySelector("#hastighet");
  const valgtHastighet = chooseSpeed.value;
  startScreenContainer.style.display = "none";
  resetObject();
  setInterval(moveObject, valgtHastighet);
});

// Cookie Game end

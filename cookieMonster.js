// Cookie Game start

const catcher = document.getElementById("fanger");
const object = document.getElementById("objekt");
const scoreDisplay = document.getElementById("score");
const startGameBtn = document.querySelector("button");
const startScreenContainer = document.querySelector("#startScreenContainer");

let score = 0;

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




const catcher = document.getElementById("fanger");
const object = document.getElementById("objekt");
const scoreDisplay = document.getElementById("score");
const startGameBtn = document.querySelector("button");
const startScreenContainer = document.querySelector("#startScreenContainer");

let score = 0;
let lives = 3; // Initialize with 3 lives

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
    loseLife(); // Call loseLife function if object hits bottom
  } else {
    object.style.top = parseInt(object.style.top) + 1 + "px";
    checkCollision();
  }
}

function loseLife() {
  lives--; // Decrement lives by 1
  if (lives === 0) {
    // If no lives left, show game over message
    clearInterval(gameInterval);
    alert("Game Over! Try again."); // You can also replace this with a styled message box on the screen
    resetGame();
  }
}

function resetGame() {
  score = 0; // Reset score
  lives = 3; // Reset lives
  scoreDisplay.innerText = "Score: " + score; // Update score display
  startScreenContainer.style.display = "block"; // Show start screen
}

let gameInterval; // Define a variable for game interval

document.addEventListener("mousemove", moveCatcher);

startGameBtn.addEventListener("click", () => {
  const chooseSpeed = document.querySelector("#hastighet");
  const valgtHastighet = chooseSpeed.value;
  startScreenContainer.style.display = "none";
  resetObject();
  gameInterval = setInterval(moveObject, valgtHastighet); // Store interval in gameInterval variable
});

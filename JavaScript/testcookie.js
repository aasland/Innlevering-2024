// Cookie Game start
const catcher = document.getElementById("fanger");
const object = document.getElementById("objekt");
const scoreDisplay = document.getElementById("score");
const startGameBtn = document.querySelector("button");
const startScreenContainer = document.querySelector("#startScreenContainer");
const gameOverContainer = document.getElementById("gameOverContainer");
const livesDisplay = document.getElementById("lives"); // New variable for lives display

let score = 0;
let lives = 3; // Initialize with 3 lives
let gameInterval;

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
    updateLivesDisplay(); // Update lives display with hearts
  
    if (lives === 0) {
      clearInterval(gameInterval);
      gameOverContainer.style.display = "flex"; // Show game over container
      resetGame();
    } else {
      resetObject(); // Ensure the object is reset for the next round
    }
  }
  
  function updateLivesDisplay() {
    const lifeIcons = document.querySelectorAll('.life');
    lifeIcons.forEach((icon, index) => {
      icon.style.visibility = index < lives ? 'visible' : 'hidden';
    });
  }
  
  function resetGame() {
    score = 0; // Reset score
    lives = 3; // Reset lives
    scoreDisplay.innerText = "Score: " + score; // Update score display
    updateLivesDisplay(); // Ensure lives are updated in UI
    startScreenContainer.style.display = "block"; // Show start screen
  }
  

document.addEventListener("mousemove", moveCatcher);

startGameBtn.addEventListener("click", () => {
  const chooseSpeed = document.querySelector("#hastighet");
  const valgtHastighet = chooseSpeed.value;
  startScreenContainer.style.display = "none";
  gameOverContainer.style.display = "none";
  resetObject();
  gameInterval = setInterval(moveObject, valgtHastighet);
});

// Cookie Game end

//Instagram

// automatisering av bilde karusell
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

// kommentarfelt

("use strict");

const userId = {
  name: null,
  identity: null,
  image: null,
  message: null,
  date: null,
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", (e) => {
  console.log("Input trykket");
  if (!userComment.value) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
  } else {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("abled");
  }
});


function addPost() {
  console.log("Knappen fungerer");

  userId.name = userName.value;
  if (userId.name === "Anonymous") {
    userId.identity = false;
    userId.image = "anonymous.png";
  } else {
    userId.identity = true;
    userId.image = "user.png";
  }

  userId.message = userComment.value;
  userId.date = new Date().toLocaleString();
  let published = `<div class="parents"> 
            
            <div> 
                <h1>${userId.name}</h1>
                <p>${userId.message}</p>
                <span class="date">${userId.date}</span>
            </div> 
        </div>`;

  comments.innerHTML += published;

  userComment.value = "";

  let commentsNum = document.querySelectorAll(".parents").length;
  document.getElementById("comment").textContent = commentsNum;

  if (!userComment.value.trim()) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
  }
}

publishBtn.addEventListener("click", addPost);

userComment.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addPost();
    e.preventDefault(); // stopper den vanlige funskjonaliteten til enter tasten
  }
});

//endrer tommel opp og ned knapp

// Fungerer men kan ikke klikke på dem flere ganger

/*function addListenersToThumbs() {
  const up = document.getElementById("up");
  const upTrykket = document.getElementById("up-trykket");
  const ned = document.getElementById("ned");
  const nedTrykket = document.getElementById("ned-trykket");

  function upButtonClicked() {
      //if (!isShown(nedTrykket)) {
          up.style.display = "none"
          upTrykket.style.display = "block"
     // }
  }

  function nedButtonClicked() {
      //if (!isShown(upTrykket)) {
          ned.style.display = "none"
          nedTrykket.style.display = "block"
      //}
  }

  up.onclick = upButtonClicked
  ned.onclick = nedButtonClicked

 /* // Check if an element is shown or not
  function isShown(element) {
      return element.style.display !== 'none';
  } 
}

addListenersToThumbs()*/

function addListenersToThumbs() {
  const up = document.getElementById("up")
  const upTrykket = document.getElementById("up-trykket")
  const ned = document.getElementById("ned")
  const nedTrykket = document.getElementById("ned-trykket")

  let upShown = true;
  let nedShown = true;

  function toggleButton(buttonId) {
    if (buttonId === "up") {
      upShown = !upShown;
      up.style.display = upShown ? "block" : "none";
      upTrykket.style.display = upShown ? "none" : "block";
    } else if (buttonId === "ned") {
      nedShown = !nedShown;
      ned.style.display = nedShown ? "block" : "none";
      nedTrykket.style.display = nedShown ? "none" : "block";
    }
  }

  up.onclick = () => toggleButton("up")
  upTrykket.onclick = () => toggleButton("up")
  ned.onclick = () => toggleButton("ned")
  nedTrykket.onclick = () => toggleButton("ned")
}

addListenersToThumbs();


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
  //if (userComment.value) return
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

function addListenersToThumbs() {
  // Get the elements to work with
  const up = document.getElementById("up");
  const upTrykket = document.getElementById("up-trykket");
  const ned = document.getElementById("ned");
  const nedTrykket = document.getElementById("ned-trykket");

  // Add click event listener for the 'up' button
  function upButtonClicked() {
      if (!isShown(nedTrykket)) {
          up.style.display = "none";
          upTrykket.style.display = "block";
      }
  }

  // Add click event listener for the 'ned' button
  function nedButtonClicked() {
      if (!isShown(upTrykket)) {
          ned.style.display = "none";
          nedTrykket.style.display = "block";
      }
  }

  // Add click event listeners to their respective elements
  up.onclick = upButtonClicked;
  ned.onclick = nedButtonClicked;

  // Check if an element is shown or not
  function isShown(element) {
      return element.style.display !== 'none';
  }
}

// You can then call the function to add events to the desired elements
addListenersToThumbs();


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

userComment.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addPost();
    e.preventDefault(); // stopper den vanlige funskjonaliteten til enter tasten
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
                <div class="engagements">
                   <i class="fa-regular fa-thumbs-up"></i>
                   <i class="fa-solid fa-thumbs-up">  </i> 
                </div> 
                <span class="date">${userId.date}</span>
            </div> 
        </div>`;

  comments.innerHTML += published;

  addListenersToThumbs();

  userComment.value = "";

  let commentsNum = document.querySelectorAll(".parents").length;
  document.getElementById("comment").textContent = commentsNum;

  if (!userComment.value.trim()) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");
  }
}

//<img src="${userId.image}">

//publishBtn.addEventListener("click", addPost);

//endrer tommel opp og end knapp

function addListenersToThumbs() {
  //  let up = getElementById("up")
  //  let upTrykket = getElementById("up-trykket")
  //  let ned = getElementById("ned")
  //  let nedTrykket = getElementById("ned-trykket")

  //  up.onclick = function endre(){
  //    up.style.display = "none"
  //    upTrykket.style.display = "block"
  //  }

  allThumbsUp = document.querySelectorAll(".fa-thumbs-up");
  for (thumbsUp of allThumbsUp) {
    thumbsUp.addEventListener("click", function (evt) {
      console.log("Tommel OPP trykket");
      const tommel = evt.target;
      console.log(tommel);
    });
  }

  allThumbsDown = document.querySelectorAll(".fa-thumbs-down");
  for (thumbsDown of allThumbsDown) {
    thumbsDown.addEventListener("click", function (evt) {
      console.log("Tommel ned trykket");
      const tommel = evt.target;
      console.log(tommel);
    });
  }
}
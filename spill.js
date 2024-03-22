
const popup = document.querySelector(".intro");
window.addEventListener("load", function () {
  popup.classList.add("aktiv");
});

const lukk = document.getElementById("lukkKnapp");
lukk.addEventListener("click", function () {
  if (popup.classList.contains("aktiv")) {
    popup.classList.remove("aktiv");
  }
});

const start = document.getElementById("startSpill");
start.addEventListener("click", function () {
  if (popup.classList.contains("aktiv")) {
    popup.classList.remove("aktiv");
  }
});

const riktig = document.querySelectorAll(".riktig");
for (const kortSnud of riktig) {
  kortSnud.addEventListener("click", function () {
    kortSnud.classList.toggle("snudd");
  });
}

const feil = document.querySelectorAll(".feil");
for (const shake of feil)
  shake.addEventListener("click", function () {
    shake.classList.add("shake");
    setTimeout(function () {
      shake.classList.remove("shake");
    }, 1000);
  });


let i = 3;
for (const liv of feil) {
  liv.addEventListener("click", function () {
    i--;
    console.log(i);

    if (i === 0) {
      const melding = document.querySelector(".gameOver");
      melding.classList.add("paa");
    }
  });
}

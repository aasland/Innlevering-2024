
const riktig = document.querySelectorAll(".riktig")
for (const kortSnud of riktig) {
    kortSnud.addEventListener("click", function () { 
        kortSnud.classList.toggle("snudd")
    })
}
/*
const gratulerer = document.querySelectorAll("[feil-target]")
const lukkKnapp = document.querySelector(".lukkKnapp")

gratulerer.addEventListener("click", function(){
    gratulerer.classList.add("aktiv")
})


const howTo= document.querySelector(".gratulerer")
window.addEventListener("load", function(){
    window.classList
})

*/


window.onload = function() {
    document.querySelector(".gratulerer").style.display = "block";
  };

  function closePopup() {
    document.querySelector(".gratulerer").style.display = "none";
  }
 
 
const feil = document.querySelectorAll(".feil")
for(const shake of feil)
shake.addEventListener("click", function () {
    shake.classList.add("shake")
    setTimeout(function() {
        shake.classList.remove("shake") }, 1000)
})

   

// popup boks forklarer spillets regler i steden  også bare flipp på riktig 

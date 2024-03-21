
const riktig = document.querySelectorAll(".riktig")

for (const kortSnud of riktig) {
    kortSnud.addEventListener("click", function () { 
        kortSnud.classList.toggle("snudd")
    })
}

const popup = document.querySelector(".intro")

window.addEventListener("load", function(){
    popup.classList.add("aktiv")
})



const lukk = document.getElementById("lukkKnapp")

lukk.addEventListener("click", function(){
    if (popup.classList.contains("aktiv")) {
        popup.classList.remove("aktiv")
      }
})

 
const feil = document.querySelectorAll(".feil")

for(const shake of feil)
shake.addEventListener("click", function () {
    shake.classList.add("shake")
    setTimeout(function() {
        shake.classList.remove("shake") }, 1000)
})

   

 

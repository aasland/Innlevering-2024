
const riktig = document.querySelectorAll(".riktig")
for (const kortSnud of riktig) {
    kortSnud.addEventListener("click", function () { 
        kortSnud.classList.toggle("snudd")
    })
}


window.addEventListener("load", function(){
    const popup = document.querySelector(".gratulerer");
    popup.classList.add("aktiv");
});



const lukk = document.getElementById("lukkKnapp");
lukk.addEventListener("click", function(){
    const gratulerer = lukk.gratulerer
    gratulerer.classList.remove("aktiv");
});

 
const feil = document.querySelectorAll(".feil")
for(const shake of feil)
shake.addEventListener("click", function () {
    shake.classList.add("shake")
    setTimeout(function() {
        shake.classList.remove("shake") }, 1000)
})

   

// popup boks forklarer spillets regler i steden  også bare flipp på riktig 

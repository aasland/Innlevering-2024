const riktig = document.querySelectorAll(".riktig")

for (const kortSnud of riktig) {
    kortSnud.addEventListener("click", function () { 
        kortSnud.classList.toggle("snudd")
    }
    )
}

const feil = document.querySelectorAll(".feil")

for(const shake of feil)
shake.addEventListener("click", function () {
    shake.classList.toggle("shake")
})


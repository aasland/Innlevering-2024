const kort = document.querySelectorAll(".kort")

for (const kortSnud of kort) {
    kortSnud.addEventListener("click", function () { 
        kortSnud.classList.toggle("snudd")
    }
    )
}

const ekteNyhet = document.querySelectorAll(".feil")

for(const feil of ekteNyhet)
feil.addEventListener("click", function () {
    feil.classList.toggle("shake")
})


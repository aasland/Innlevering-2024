const card = document.querySelectorAll(".kort")

card.addEventListener("click", function(){
    card.classList.toggle("snudd")

})

const ekteNyhet = document.querySelectorAll("feil")

ekteNyhet.addEventListener("click", function(){
    ekteNyhet.classList.toggle("farge")
})


const ekteNyhet = document.querySelectorAll("feil")
for (const feil of ekteNyhet){
    feil.addEventListener("click", function(evt){
        const rist = evt.target //får tak i elementet som ble trykket på
        rist.classList.toggle("rist")

    }
    )
}

const rist= document.querySelector
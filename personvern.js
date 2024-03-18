// hover ordforklaring gdpr
const hoverText = document.getElementById("hoverGDPR");
const popup = document.getElementById("popupGDPR");
let popupVisible = false;

hoverText.addEventListener("mouseover", function (evt) {
    popup.style.display = "block";
    const hoverRect = hoverText.getBoundingClientRect();
    popup.style.top = (hoverRect.top + hoverRect.height) + "px"; // Plasser popup-boksen under hoverText
    popup.style.left = hoverRect.left + "px"; // Plasser popup-boksen på samme x-posisjon som hoverText
    popupVisible = true;
});

hoverText.addEventListener("mouseout", function (evt) {
    popupVisible = false;
    setTimeout(() => {
        if (!popupVisible) {
            popup.style.display = "none";
        }
    }, 200); // forsinker forsvinningen til popup-boksen
});

popup.addEventListener("mouseover", function (evt) {
    popupVisible = true;
});

popup.addEventListener("mouseout", function (evt) {
    popupVisible = false;
    setTimeout(() => {
        if (!popupVisible) {
            popup.style.display = "none";
        }
    }, 200);
});

// hover ordforklaring personopplysning
const hoverText1 = document.getElementById("hoverPersonopplysninger");
const popup1 = document.getElementById("popup1");
let popup1Visible = false;

hoverText1.addEventListener("mouseover", function (evt) {
    popup1.style.display = "block";
    const hoverRect = hoverText1.getBoundingClientRect();
    popup1.style.top = (hoverRect.top + hoverRect.height) + "px"; // Plasser popup-boksen under hoverText
    popup1.style.left = hoverRect.left + "px"; // Plasser popup-boksen på samme x-posisjon som hoverText
    popup1Visible = true;
});

hoverText1.addEventListener("mouseout", function (evt) {
    popup1Visible = false;
    setTimeout(() => {
        if (!popup1Visible) {
            popup1.style.display = "none";
        }
    }, 200); // forsinker forsvinningen til popup-boksen
});

popup1.addEventListener("mouseover", function (evt) {
    popup1Visible = true;
});

popup1.addEventListener("mouseout", function (evt) {
    popup1Visible = false;
    setTimeout(() => {
        if (!popup1Visible) {
            popup1.style.display = "none";
        }
    }, 200);
});
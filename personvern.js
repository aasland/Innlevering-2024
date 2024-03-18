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
    popup1.style.top = (hoverRect.top + hoverRect.height) + "px"; 
    popup1.style.left = hoverRect.left + "px"; 
    popup1Visible = true;
});

hoverText1.addEventListener("mouseout", function (evt) {
    popup1Visible = false;
    setTimeout(() => {
        if (!popup1Visible) {
            popup1.style.display = "none";
        }
    }, 200); 
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

// hover ordforklaring datatilsynet
const hoverText2 = document.getElementById("hoverDatatilsynet");
const popup2 = document.getElementById("popup2");
let popup2Visible = false;

hoverText2.addEventListener("mouseover", function (evt) {
    popup2.style.display = "block";
    const hoverRect = hoverText2.getBoundingClientRect();
    popup2.style.top = (hoverRect.top + hoverRect.height) + "px"; 
    popup2.style.left = hoverRect.left + "px"; 
    popup2Visible = true;
});

hoverText2.addEventListener("mouseout", function (evt) {
    popup2Visible = false;
    setTimeout(() => {
        if (!popup2Visible) {
            popup2.style.display = "none";
        }
    }, 200); 
});

popup2.addEventListener("mouseover", function (evt) {
    popup2Visible = true;
});

popup2.addEventListener("mouseout", function (evt) {
    popup2Visible = false;
    setTimeout(() => {
        if (!popup2Visible) {
            popup2.style.display = "none";
        }
    }, 200);
});
// Night/Light-mode start

let icon = document.querySelector("#moonIcon");

icon.onclick = function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    icon.src = "bilder/sun.png";
  } else {
    icon.src = "bilder/moon.png";
  }
};

// Night/Light-mode end


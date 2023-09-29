let navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  var posizioneScroll = window.scrollY;
  if (posizioneScroll > 338) {
    if (!navbar.classList.contains("changed")) {
      navbar.classList.add("changed");
      console.log("evento innescato", window.scrollY);
    }
  } else {
    if (navbar.classList.contains("changed")) {
      navbar.classList.remove("changed");
      console.log("secondo evento innescato", window.scrollY);
    }
  }
});

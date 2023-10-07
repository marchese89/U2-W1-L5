let navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  var posizioneScroll = window.scrollY;
  if (posizioneScroll > 338) {
    if (!navbar.classList.contains("changed")) {
      navbar.classList.add("changed");
    }
  } else {
    if (navbar.classList.contains("changed")) {
      navbar.classList.remove("changed");
    }
  }
});

let mm = [];

mm.push(document.querySelector("svg > g > g > g:nth-child(12)"));
mm.push(document.querySelector("svg > g > g > g:nth-child(354)"));
mm.push(document.querySelector("svg > g > g > g:nth-child(450)"));
mm.push(document.querySelector("svg > g > g > g:nth-child(522)"));
mm.push(document.querySelector("svg > g > g > g:nth-child(430)"));
mm.push(document.querySelector("svg > g > g > g:nth-child(334)"));

mm = Array.from(mm);

const elements0 = document.querySelectorAll("svg > g > g > g[opacity='0']");
console.log(elements0);

const elements1 = document.querySelectorAll("svg > g > g > g[opacity='1']");
console.log(elements1);

setInterval(() => {
  console.log("chiamato interval");
  let v = mm[Math.floor(Math.random() * mm.length)];
  if (v.style.display === "block") {
    v.style.display = "none";
  } else {
    v.style.display = "block";
  }
}, 500);

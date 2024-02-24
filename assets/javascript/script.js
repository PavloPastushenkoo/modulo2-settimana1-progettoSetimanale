window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  const tasto = document.getElementById("opzione2");
  if (window.scrollY > 425) {
    navbar.classList.add("scrollato");
    tasto.classList.add("scrollato");
  } else {
    navbar.classList.remove("scrollato");
    tasto.classList.remove("scrollato");
  }
});

const arrayNumerica = (elemento, qtty, array) => {
  let arrayNew = [];
  for (let i = 0; i < qtty; i++) {
    let random = Math.floor(Math.random() * elemento.length);
    arrayNew.push(elemento[random]);
  }
  return arrayNew;
};

window.addEventListener("load", function (e) {
  const elementi = document.querySelectorAll("g[stroke-linecap=butt]");
  setInterval(() => {
    let random = Math.floor(Math.random() * elementi.length);
    if (elementi[random].getAttribute("opacity") === "1") {
      elementi[random].setAttribute("opacity", "0");
    } else {
      elementi[random].setAttribute("opacity", "1");
    }
  }, 40);
});

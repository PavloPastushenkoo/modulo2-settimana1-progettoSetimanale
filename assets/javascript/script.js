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
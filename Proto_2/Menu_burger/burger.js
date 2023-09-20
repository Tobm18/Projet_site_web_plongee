var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = navAction
closeBtn.onclick = closeNav;

function navAction() {
  if (sidenav.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

var topnav = document.getElementById("topNav");
var banner = document.getElementById("banner")
var clickMenu = document.getElementById("openBtn");

clickMenu.onclick = navAction

function navAction(event) {
  event.preventDefault();
  if (topnav.classList.contains("open")) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  topnav.classList.add("open");
  banner.classList.add("open");
}

function closeNav() {
  topnav.classList.remove("open");
  banner.classList.remove("open");
}

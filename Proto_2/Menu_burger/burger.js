var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = navAction
closeBtn.onclick = closeNav;
openBtn.addEventListener('click', toggleNav);

function navAction(event) {
  event.preventDefault();
  if (sidenav.classList.contains("open")) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  sidenav.classList.add("open");
}

function closeNav() {
  sidenav.classList.remove("open");
}

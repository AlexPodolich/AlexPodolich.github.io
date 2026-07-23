var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.classList.add("open");
}
function closemenu() {
    sidemenu.classList.remove("open");
}

// Close the mobile menu after tapping a nav link
sidemenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closemenu);
});

// variables
let hamburger = document.getElementsByClassName("hamburger");
let close = document.getElementsByClassName("close");

function toggleMenu() {
    let list = document.getElementById("navigation");
    let hamburger = document.getElementById("hamburger");
    let close = document.getElementById("close");
    if (list.style.display === "block") {
        list.style.display = "none";
        close.style.display = "none";
        hamburger.style.display = "block";
    } else {
        list.style.display = "block";
        hamburger.style.display = "none";
        close.style.display = "block";
    }
}

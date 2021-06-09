function burgerOpen(x) {
    x.classList.toggle("change");
    menuOpen();
}
function menuOpen() {
    let x = document.getElementById("my_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
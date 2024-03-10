let iSlide = 1;
showSlide(iSlide);

function tmbhSlide(n) {
    showSlide(iSlide += n);
}
function currentSlide(n) {
    showSlide(iSlide = n);
}

function showSlide(n) {
    let i;
    let slide = document.getElementsByClassName("imgSlide");
    let dot = document.getElementsByClassName("dot");

    if (n > slide.length) {
        iSlide = 1
    }
    if (n < 1) {
        iSlide = slide.length
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    slide[iSlide-1].style.display = "block";
    dot[iSlide-1].className += " active";
}
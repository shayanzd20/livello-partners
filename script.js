let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const animatedGif = document.getElementById("animated-gif");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3500); // Change slide every 3 seconds
}

showSlides(); // Start the slideshow

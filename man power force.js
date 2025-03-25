// Add active class to the current page link
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".footer-links ul li a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

//testimonial slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Show the current slide
    slides[index].classList.add("active");
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentSlide);
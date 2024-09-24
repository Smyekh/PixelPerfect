// Reveal Proposal Text
document.getElementById("revealButton").addEventListener("click", function() {
  document.getElementById("proposalText").style.display = "block";
  document.getElementById("proposalHeading").style.display ="none";
  document.getElementById("proposalPara").style.display = "none"
  this.style.display = "none";  // Hide the button after clicking
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Countdown Timer
function countdown() {
  const proposalDate = new Date("2024-09-26T00:00:00").getTime(); // Set your proposal date
  const now = new Date().getTime();
  const distance = proposalDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "It's time!";
  }
}

setInterval(countdown, 1000);

const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
    navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
    .querySelectorAll(".menu a")
    .forEach((link) => link.addEventListener("click", toggleMenu));

// Scroll Reveal //

const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    delay: 400,
    easing: "ease-in-out",
});

sr.reveal(".home-headlines", { origin: "left" });
sr.reveal(".home-page img", { origin: "right" });
sr.reveal(".memories h1");


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleButton.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDark);
});
// Initial state
toggleButton.textContent =
  localStorage.getItem("darkMode") === "true" ? "☀️" : "🌙";
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Typewriter effect
const textElement = document.querySelector(".typewriter");
const text = "Bipin Sharma";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      textElement.innerHTML = "";
      index = 0;
      typeWriter();
    }, 2000); // Restart after 2 seconds
  }
}
typeWriter();

// Form submission (demo)
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Message sent! (This is a demo)");
// });

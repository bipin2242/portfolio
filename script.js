// Smooth scrolling: Selects all anchor links that start with # and adds a smooth scrolling effect when clicked.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the default jump behavior
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Applies smooth scrolling
      });
    }
  });
});

// Scroll animation: Add animation class to elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll("section, .project-card, .skill-item").forEach(el => {
  el.classList.add("animate-on-scroll");
  observer.observe(el);
});

// Auto dark mode: Automatically applies dark mode based on system preference
function applySystemTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Apply theme on page load
applySystemTheme();

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);

// Typewriter effect: Implements a typewriter effect for the main heading.
const textElement = document.querySelector(".typewriter"); // Gets the element with the class 'typewriter'
const text = "Bipin Sharma"; // The text to be typed
let index = 0; // The current index of the text

function typeWriter() {
  // The typewriter function
  if (index < text.length) {
    // If the index is less than the length of the text
    textElement.innerHTML += text.charAt(index); // Adds the next character to the element
    index++; // Increments the index
    setTimeout(typeWriter, 100); // Calls the function again after 100ms
  } else {
    // If the index is equal to the length of the text
    setTimeout(() => {
      // After 2 seconds
      textElement.innerHTML = ""; // Clears the text
      index = 0; // Resets the index
      typeWriter(); // Calls the function again to restart the effect
    }, 2000); // Restart after 2 seconds
  }
}
typeWriter(); // Starts the typewriter effect

// Form submission (demo)
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Message sent! (This is a demo)");
// });

// EmailJS: Initializes EmailJS with the user ID.
(function () {
  emailjs.init("rRZJMpc1iV93fjQ3v"); // Initializes EmailJS with the user ID
})();

// sendMail: Sends the form data using EmailJS.
function sendMail(event) {
  // The sendMail function
  event.preventDefault(); // Prevents the default form submission

  emailjs.sendForm("service_bgskdee", "template_sdqzgkw", event.target).then(
    () => {
      // If the email is sent successfully
      alert("Message sent successfully!"); // Alerts the user that the message was sent
    },
    (error) => {
      // If there's an error sending the email
      alert("Failed to send message: " + error.text); // Alerts the user that the message failed to send
    }
  );
}

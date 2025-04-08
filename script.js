// Smooth scrolling: Selects all anchor links that start with # and adds a smooth scrolling effect when clicked.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the default jump behavior
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Applies smooth scrolling
    });
  });
});

// Dark mode toggle: Toggles dark mode on and off by adding/removing the 'dark-mode' class to the body.
const toggleButton = document.getElementById("darkModeToggle"); // Gets the dark mode toggle button
toggleButton.addEventListener("click", () => {
  // Adds a click event listener to the toggle button
  document.body.classList.toggle("dark-mode"); // Toggles the 'dark-mode' class on the body
  const isDark = document.body.classList.contains("dark-mode"); // Checks if dark mode is currently enabled
  toggleButton.textContent = isDark ? "☀️" : "🌙"; // Updates the button text based on the dark mode state
  localStorage.setItem("darkMode", isDark); // Saves the dark mode state to local storage
});
// Initial state: Sets the initial dark mode state based on the value in local storage.
try {
  // Attempts to retrieve the dark mode state from local storage
  toggleButton.textContent =
    localStorage.getItem("darkMode") === "true" ? "☀️" : "🌙"; // Sets the button text based on the stored dark mode state
  if (localStorage.getItem("darkMode") === "true") {
    // If dark mode was previously enabled
    document.body.classList.add("dark-mode"); // Adds the 'dark-mode' class to the body
  }
} catch (e) {
  // If there's an error accessing local storage (e.g., in some browsers with privacy settings)
  console.error("Error accessing localStorage:", e); // Logs the error to the console
}
toggleButton.setAttribute("aria-label", "Toggle dark mode"); // Sets an aria-label for accessibility

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

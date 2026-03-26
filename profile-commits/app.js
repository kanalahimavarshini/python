const app = document.querySelector("main");
const callToAction = document.querySelector(".action-btn");
const themeToggle = document.querySelector(".theme-btn");
const demoForm = document.querySelector("#demoForm");

let darkMode = false;

themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
});

callToAction.addEventListener("click", () => {
    const message = document.createElement("p");
    message.className = "notice";
    message.textContent = darkMode
        ? "Dark mode is enabled and interactions are working."
        : "Light mode is active and the demo is responsive.";
    app.appendChild(message);
});

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.querySelector("#email");
    const emailValue = emailInput.value.trim();
    const result = document.createElement("p");
    result.className = "notice";
    if (emailValue && emailValue.includes("@")) {
        result.textContent = `Thanks! ${emailValue} has been subscribed.`;
    } else {
        result.textContent = "Please enter a valid email address.";
    }
    app.appendChild(result);
});

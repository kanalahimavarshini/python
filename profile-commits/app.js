const app = document.querySelector("main");
const callToAction = document.querySelector(".action-btn");
const themeToggle = document.createElement("button");
themeToggle.textContent = "Toggle theme";
themeToggle.className = "theme-btn";
app.appendChild(themeToggle);
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

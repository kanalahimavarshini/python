const app = document.querySelector("main");
const callToAction = document.createElement("button");
callToAction.textContent = "Show tips";
callToAction.className = "action-btn";
app.appendChild(callToAction);
callToAction.addEventListener("click", () => {
    const message = document.createElement("p");
    message.className = "notice";
    message.textContent = "This demo mixes HTML, CSS, and JavaScript in one folder.";
    app.appendChild(message);
});

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const welcomeText = document.querySelector("#welcome-text");
const welcomePage = document.querySelector("#welcome-page");
const logoutBtn = document.querySelector("#logout-form");

const HIDE_CLASS = "hide";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginBtnClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginInput.value = "";
    loginForm.classList.add(HIDE_CLASS);
    showWelcomePage(username);
}
function onLogoutBtnClick(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    welcomeText.innerText = "";
    welcomePage.classList.add(HIDE_CLASS);
    loginForm.classList.remove(HIDE_CLASS);
}
function showWelcomePage(username) {
    welcomePage.classList.remove(HIDE_CLASS);
    welcomeText.innerText = `Welcome ${username}!`;
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDE_CLASS);
} else {
    showWelcomePage(savedUsername);
}

logoutBtn.addEventListener("submit", onLogoutBtnClick);
loginForm.addEventListener("submit", onLoginBtnClick);
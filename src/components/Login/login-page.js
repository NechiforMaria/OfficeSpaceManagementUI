const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "user") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    alert("Invalid username or password.");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
});

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");

form.addEventListener("submit", function () {
  const username = nameInput.value;

  localStorage.setItem("username", username);
});
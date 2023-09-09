const checkPasswordButton = document.querySelector(".btn");
let message = document.querySelector(".message");
const getFirstOptionPassword = document.querySelector("#first-col");
const getSecondOptionPassword = document.querySelector("#sec-col");
const getThirdOptionPassword = document.querySelector("#third-col");

checkPasswordButton.addEventListener("click", () => {
  const getFirstOptionPasswordValue = getFirstOptionPassword.value;
  const getSecondOptionPasswordValue = getSecondOptionPassword.value;
  const getThirdOptionPasswordValue = getThirdOptionPassword.value;

  const password =
    getFirstOptionPasswordValue +
    getSecondOptionPasswordValue +
    getThirdOptionPasswordValue;
  if (password === "911") {
    message.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    message.innerHTML = "Password 2 correcto";
  } else {
    message.innerHTML = "Password incorrecto";
  }
});

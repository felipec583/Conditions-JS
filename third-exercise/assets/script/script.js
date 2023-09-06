const checkPasswordButton = document.querySelector(".btn");
let message = document.querySelector(".message");

checkPasswordButton.addEventListener("click", () => {
  const getFirstOptionPasswordValue =
    document.querySelector("#first-col").value;
  const getSecondOptionPasswordValue = document.querySelector("#sec-col").value;
  const getThirdOptionPasswordValue =
    document.querySelector("#third-col").value;

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

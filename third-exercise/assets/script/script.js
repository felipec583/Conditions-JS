const checkPasswordButton = document.querySelector(".btn");
const getFirstOptionPasswordValue = document.querySelector("#first-col").value;
const getSecondOptionPasswordValue = document.querySelector("#sec-col").value;
const getThirdOptionPasswordValue = document.querySelector("#third-col").value;
let message = document.querySelector(".message");

checkPasswordButton.addEventListener("click", () => {
  console.log(getFirstOptionPasswordValue);
  console.log(getSecondOptionPasswordValue);
  console.log(getThirdOptionPasswordValue);
});

/* checkPasswordButton.addEventListener("click", () => {
  const getFirstOptionPasswordValue =
    document.querySelector("#first-col").value;
  const getSecondOptionPasswordValue = document.querySelector("#sec-col").value;
  const getThirdOptionPasswordValue =
    document.querySelector("#third-col").value;
  if (
    getFirstOptionPasswordValue === "9" &&
    getSecondOptionPasswordValue === "1" &&
    getThirdOptionPasswordValue === "1"
  ) {
    message.innerHTML = "Password 1 correcto";
  } else if (
    getFirstOptionPasswordValue === "7" &&
    getSecondOptionPasswordValue === "1" &&
    getThirdOptionPasswordValue === "4"
  ) {
    message.innerHTML = "Password 2 correcto";
  } else {
    message.innerHTML = "Password incorrecto";
  }
});
 */

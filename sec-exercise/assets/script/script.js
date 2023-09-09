// Declaración de variables
const checkStickerNumberBtn = document.querySelector(".btn");
let message = document.querySelector(".message");
const getFirstStickerInput = document.querySelector(".first");
const getSecondStickerInput = document.querySelector(".second");
const getThirdStickerInput = document.querySelector(".third");

//Evento
checkStickerNumberBtn.addEventListener("click", () => {
  const getFirstStickerNumber = Number(getFirstStickerInput.value);
  const getSecondStickerNumber = Number(getSecondStickerInput.value);
  const getThirdStickerNumber = Number(getThirdStickerInput.value);
  const getStickerNumberSum =
    getFirstStickerNumber + getSecondStickerNumber + getThirdStickerNumber;

  if (
    getFirstStickerNumber < 0 ||
    getSecondStickerNumber < 0 ||
    getThirdStickerNumber < 0 ||
    isNaN(getStickerNumberSum)
  ) {
    message.innerHTML = "Ingresa solo número positivos";
  } else {
    if (getStickerNumberSum === 1) {
      message.innerHTML = `Lllevas ${getStickerNumberSum} sticker`;
    } else if (getStickerNumberSum <= 10) {
      message.innerHTML = `Llevas ${getStickerNumberSum} stickers`;
    } else {
      message.innerHTML = `LLevas demasiados stickers`;
    }
  }
});

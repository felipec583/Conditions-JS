// Declaración de variables
const checkStickerNumberBtn = document.querySelector(".btn");
let message = document.querySelector(".message");

//Evento
checkStickerNumberBtn.addEventListener("click", () => {
  const getFirstStickerNumber = Number(document.querySelector(".first").value);
  const getSecondStickerNumber = Number(
    document.querySelector(".second").value
  );
  const getThirdStickerNumber = Number(document.querySelector(".third").value);
  const getStickerNumberSum =
    getFirstStickerNumber + getSecondStickerNumber + getThirdStickerNumber;

  if (
    getFirstStickerNumber < 0 ||
    getSecondStickerNumber < 0 ||
    getThirdStickerNumber < 0
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

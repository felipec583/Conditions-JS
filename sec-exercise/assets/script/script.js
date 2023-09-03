const checkStickerNumberBtn = document.querySelector(".btn");
let message = document.querySelector(".message");

checkStickerNumberBtn.addEventListener("click", () => {
  const getFirstStickerNumber = Number(document.querySelector(".first").value);
  const getSecondStickerNumber = Number(
    document.querySelector(".second").value
  );
  const getThirdStickerNumber = Number(document.querySelector(".third").value);
  const getStickerNumberSum =
    getFirstStickerNumber + getSecondStickerNumber + getThirdStickerNumber;

  if (getStickerNumberSum === 1) {
    message.innerHTML = ` ${getStickerNumberSum} sticker`;
  } else if (getStickerNumberSum <= 10) {
    message.innerHTML = ` ${getStickerNumberSum} stickers`;
  } else {
    message.innerHTML = ` demasiados stickers`;
  }
});

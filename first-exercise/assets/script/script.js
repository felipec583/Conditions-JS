const image = document.querySelector(".img");

image.addEventListener("click", (e) => {
  if (image.style.border === "") {
    image.style.border = "2px red solid";
  } else {
    image.style.border = "";
  }
});

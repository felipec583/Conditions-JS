const image = document.getElementById("img");

/* image.addEventListener("click", (e) => {
  if (image.style.border === "") {
    image.style.border = "2px red solid";
  } else {
    image.style.border = "";
  }
});
 */

image.addEventListener("click", () => {
  image.classList.toggle("img-border");
});

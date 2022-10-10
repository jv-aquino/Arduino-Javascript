const createLedImage = (color) => {
  const ledImage = document.createElement("img");
  ledImage.setAttribute("src", "./img/" + color + "Led.png");
  ledImage.id = color;
  ledImage.classList.add("led");

  return ledImage;
}

export {createLedImage};
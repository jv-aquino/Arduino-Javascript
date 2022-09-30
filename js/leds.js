const createLedImage = (color) => {
  const ledImg = document.createElement("img");
  ledImg.setAttribute("src", "./img/" + color + "Led.png");
  ledImg.id = color;

  return ledImg;
}

export {createLedImage};
const Dom = (() => {
  const ledImage = document.querySelector("img.led");
  const getLedImage = () => ledImage;

  const changeLedImage = (state) => {
    let srcPath = "./img/led" + state +".png";
    ledImage.setAttribute("src", srcPath);
  };

  
  return {changeLedImage, getLedImage};
})();

const Led = (() => {
  let ledOn = true;
  const getLedOn = () => ledOn;
  const toggleLedOn = () => {
    ledOn = !ledOn;
  };

  return {getLedOn, toggleLedOn};
})();

const Controller = (() => {
  const changeLedState = () => {
    Led.toggleLedOn();

    if (Led.getLedOn() == true) {
      Dom.changeLedImage("on");
    }
    else {
      Dom.changeLedImage("off");
    }
  }

  Dom.getLedImage().addEventListener("click", changeLedState);;

  return {changeLedState};
})();
const socket = io('ws://localhost:8080');

const Info = (() => {
  let ledOn = true;
  const getLedOn = () => ledOn;
  const toggleLedOn = () => {
    ledOn = !ledOn;
  };

  return {getLedOn, toggleLedOn};
})();

const Dom = (() => {
  const ledImage = document.querySelector("img.led");
  const getLedImage = () => ledImage;

  const changeLedImage = (state) => {
    let srcPath = "./img/led" + state +".png";
    ledImage.setAttribute("src", srcPath);
  };
  
  return {changeLedImage, getLedImage};
})();

const Controller = (() => {
  const changeLedState = () => {
    Info.toggleLedOn();

    if (Info.getLedOn() == true) {
      Dom.changeLedImage("on");
      console.log("1");
      socket.emit('message', {"status" : "1"});
    }
    else {
      Dom.changeLedImage("off");
      socket.emit('message', {"status" : "0"});
    }
  }

  Dom.getLedImage().addEventListener("click", changeLedState);;

  return {changeLedState};
})();
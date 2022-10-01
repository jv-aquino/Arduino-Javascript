import * as Led from "./leds.js";
import * as Info from "./info.js";/* 
const socket = io("ws://localhost:8080"); */

const Dom = (() => {
  const main = document.querySelector("main")
  const ledLi = document.querySelector("li.ledLi")
  const menuUl = document.querySelector("ul.ledSection");

  ledLi.addEventListener("mouseenter", () => menuUl.classList.add("visible"));
  menuUl.addEventListener("mouseleave", () => menuUl.classList.remove("visible"));
  menuUl.childNodes.forEach(li => {
    li.addEventListener("click", (e) => {changeDom(e.target.id)});
  });

  const changeLedImage = (oldImg, newImg) => {
    const ledImage = document.getElementById(oldImg);
    ledImage.setAttribute("src", "./img/" + newImg + "Led.png");
    ledImage.id = newImg;
  };

  const turnLedsOpacity = (on, off) => {
    const onLed = document.querySelector("#" + on);
    onLed.classList.remove("off");

    off.forEach(offLed => {
      offLed = document.querySelector("#" + offLed);
      offLed.classList.add("off");
    });
  };

  const changeDom = (page) => {
    main.textContent = "";
    
    if (page == "singleLed") {
        main.appendChild(Led.createLedImage("green"));
    }
    else {
      main.appendChild(Led.createLedImage("green"));
      main.appendChild(Led.createLedImage("yellow"));
      main.appendChild(Led.createLedImage("red"));
      if (page == "multipleLeds") {
        Info.setLedOnOthersOff("green");
        turnLedsOpacity("green", Info.getLed("green", true, true));
      }
    }
    Controller.activateListener(page);
  };

  return {changeDom, changeLedImage, turnLedsOpacity};
})();

const Controller = (() => {
  const activateListener = (program) => {
    Info.resetLet();

    if (program == "singleLed") {
      const greenLed = document.querySelector("img#green");
      greenLed.addEventListener("click", () => {
        Info.toggleLed("green");

        if (Info.getLed("green") == true) {
          Dom.changeLedImage("off", "green");
        }
        else {
          Dom.changeLedImage("green", "off");
        }
      });
    }
    else if (program == "multipleLeds") {
      const leds = document.querySelectorAll("img.led");
      leds.forEach(led => {
        led.addEventListener("click", () => {
          let color = led.id;

          if(Info.getLed(color) == false) {
            Info.setLedOnOthersOff(color);
            Dom.turnLedsOpacity(color, Info.getLed(color, true, true));
          }
        });
      });
    }
    else if (program == "trafficLights") {
      
    }

    if (Info.getLed("green") == true) {/* 
      socket.emit('message', {"status" : "1"}); */
    }
    else if (Info.getLed("yellow") == true) {/* 
      socket.emit('message', {"status" : "2"}); */
    }
    else if (Info.getLed("red") == true) {/* 
      socket.emit('message', {"status" : "3"}); */
    }
    else {/* 
      socket.emit('message', {"status" : "3"}); */
    }
  };

  return {activateListener};
})();

const Start = (() => {
  Dom.changeDom("singleLed");
})();
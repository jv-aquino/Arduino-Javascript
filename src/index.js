import * as Led from "./leds.js";
import * as Info from "./info.js";
import * as Node from "./node.js";

const Dom = (() => {
  const main = document.querySelector("main");
  const ledLi = document.querySelector("li.ledLi")
  const menuUl = document.querySelector("ul.ledSection");

  ledLi.addEventListener("mouseenter", () => menuUl.classList.add("visible"));
  menuUl.addEventListener("mouseleave", () => menuUl.classList.remove("visible"));
  menuUl.childNodes.forEach(li => {
    li.addEventListener("click", (e) => {Controller.changePage(e.target.id)});
  });

  const changeLedImage = (oldImg, newImg) => {
    const ledImage = document.getElementById(oldImg);
    ledImage.setAttribute("src", "./img/" + newImg + "Led.png");
    ledImage.id = newImg;
  };

  const turnLedsOpacity = (on, off) => {
    if (!Array.isArray(on)) {
      const onLed = document.querySelector("#" + on);
      onLed.classList.remove("off");
    }
    
    if (Array.isArray(off)) {
      off.forEach(offLed => {
        offLed = document.querySelector("#" + offLed);
        offLed.classList.add("off");
      });
    }
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
    }
  };

  return {changeDom, changeLedImage, turnLedsOpacity};
})();

const Controller = (() => {
  let actualProgram;
  const setActualProgram = (value) => {
    actualProgram = value;
  }
  const getActualProgram = () => actualProgram;


  const turnLed = (color) => {
    if (getActualProgram() == "trafficLights") {
      Info.setLedOnOthersOff(color);
      Dom.turnLedsOpacity(color, Info.getLed(color, true, true));
    }
    else {
      if (Info.getLed(color) == false) {
        Info.setLed(color, true);
        Dom.turnLedsOpacity(color, "");
      }
      else {
        Info.setLed(color, false);
        Dom.turnLedsOpacity([''], [color]);
      }
    }
  }

  const activateListener = () => {
    let program = getActualProgram();
    Info.resetLeds();
    Node.emitSocket();

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
        Node.emitSocket();
      });
    }
    else if (program == "multipleLeds") {
      const leds = document.querySelectorAll("img.led");
      leds.forEach(led => {
        led.addEventListener("click", () => {
          let color = led.id;
          
          turnLed(color);
          Node.emitSocket();
        });
      });
    }
    else if (program == "trafficLights") {
      Info.setLed("green", false);
      let trafficLoop = () => {
        Info.resetLeds();
        if (getActualProgram() == "trafficLights") {turnLed("green"); Node.emitSocket();}
        else {return}

        setTimeout(() => {
          if (getActualProgram() == "trafficLights") {  
            turnLed("yellow"); Node.emitSocket();
        }}, 4000);

        setTimeout(() => {
          if (getActualProgram() == "trafficLights") {
            turnLed("red"); Node.emitSocket();
        }}, 7000);
        
        setTimeout(trafficLoop, 11000);
      };
      trafficLoop();
    }
    else if (program == "partyMode") {
      const leds = ["green", "yellow", "red"]
      const partyLoop = () => {
        setTimeout(() => {
          if (getActualProgram() == "partyMode") {
            leds.forEach(led => {
              Info.setLed(led,  Math.floor(Math.random() * 2));

              (Info.getLed(led)) ? Dom.turnLedsOpacity(led, "") : Dom.turnLedsOpacity([''], [led]);
            });
            
            Node.emitSocket();
            partyLoop();
        }}, 1000);
      }
      partyLoop();
    }
  };
  
  const changePage = (page) => {
    Dom.changeDom(page);
    if (page == "multipleLeds") {
      Info.setLedOnOthersOff("green");
      Dom.turnLedsOpacity("green", Info.getLed("green", true, true));
    }
    else if (page == "partyMode") {
      Dom.turnLedsOpacity([''], ["yellow", "green", "red"]);
    }
    setActualProgram(page);
    activateListener();
  };

  return {changePage, activateListener};
})();

const Start = (() => {
  Controller.changePage("singleLed");
})();
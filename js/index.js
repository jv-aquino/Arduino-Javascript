import * as Led from "./leds.js";/* 
const socket = io("ws://localhost:8080"); */

const Info = (() => {
  let greenLed = true;
  let yellowLed = false;
  let redLed = false;

  const getLed = (led) => {
    switch(led) {
      case "green":
        return greenLed;
        break;
      case "yellow":
        return yellowLed;
        break;
      case "red":
        return redLed;
        break;
    }
  }
  const toggleLed = (led) => {
    switch(led) {
      case "green":
        greenLed = !greenLed;
        break;
      case "yellow":
        yellowLed = !yellowLed;
        break;
      case "red":
        redLed = !redLed;
        break;
    }
  };

  return {getLed, toggleLed};
})();

const Dom = (() => {
  const main = document.querySelector("main")
  const ledLi = document.querySelector("li.ledLi")
  const menuUl = document.querySelector("ul.ledSection");

  ledLi.addEventListener("mouseenter", () => menuUl.classList.add("visible"));
  menuUl.addEventListener("mouseleave", () => menuUl.classList.remove("visible"));
  menuUl.childNodes.forEach(li => {
    li.addEventListener("click", (e) => {changeDom(e.target.id)});
  });
  
  const changeDom = (page) => {
    main.textContent = "";
    
    switch(page) {
      case "singleLed":
        main.appendChild(Led.createLedImage("green"));
        break;
      case "multipleLeds":
        main.appendChild(Led.createLedImage("green"));
        main.appendChild(Led.createLedImage("yellow"));
        main.appendChild(Led.createLedImage("red"));
        break;
      case "trafficLights":
        main.appendChild(Led.createLedImage("green"));
        main.appendChild(Led.createLedImage("yellow"));
        main.appendChild(Led.createLedImage("red"));
        break;
    }
    
    Controller.activateListener(page);
  };

  const changeLedImage = (oldImg, newImg) => {
    const ledImage = document.querySelector("img#" + oldImg);
    ledImage.id = newImg;
    ledImage.setAttribute("src", "./img/" + newImg + "Led.png");
  };

  return {changeDom, changeLedImage};
})();

const Controller = (() => {
  const activateListener = (program) => {
    if (program == "singleLed") {
      const greenLed = document.querySelector("img#green");
      greenLed.addEventListener("click", () => {
        Info.toggleLed("green");

        if (Info.getLed("green") == true) {
          Dom.changeLedImage("off", "green");/* 
          socket.emit('message', {"status" : "1"}); */
        }
        else {
          Dom.changeLedImage("green", "off");/* 
          socket.emit('message', {"status" : "0"}); */
        }
      });
    }
    else if (program == "multipleLeds") {

    }
    else if (program == "trafficLights") {
      
    }
  };

  return {activateListener};
})();

const Start = (() => {
  Dom.changeDom("singleLed");
})();
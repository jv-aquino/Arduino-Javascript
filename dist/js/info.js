let greenLed, yellowLed, redLed;

const getLed = (color, invert, getName) => {
  switch(color) {
    case "green":
      return (invert && getName) ? ["yellow", "red"] : (invert) ? [yellowLed, redLed] : greenLed;
      break;
    case "yellow":
      return (invert && getName) ? ["green", "red"] : (invert) ? [greenLed, redLed] : yellowLed;
      break;
    case "red":
      return (invert && getName) ? ["green", "yellow"] : (invert) ? [greenLed, yellowLed] : redLed;
      break;
  }
}
const setLed = (color, value) => {
  switch(color) {
    case "green":
      greenLed = value;
      break;
    case "yellow":
      yellowLed = value;
      break;
    case "red":
      redLed = value;
      break; 
  }
};

const setLedOnOthersOff = (led) => {
  setLed(getLed(led), true);
  
  getLed(led, true, true).forEach(other => {
    setLed(other, false);
  });
}
const toggleLed = (led) => {
  setLed(led, !getLed(led));
};

const resetLet = () => {
  greenLed = true;
  yellowLed = false;
  redLed = false;
};

resetLet();

export {getLed, toggleLed, resetLet, setLedOnOthersOff};
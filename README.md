# Arduino controlled by Javascript
### In this project, you can control 3 LEDs with an Arduino via Browser, using only NodeJS! Follow along with this guide so you can set up this project on your PC.

------------

## Roadmap:
[**0. Basic Setup**](#0-basic-setup)

[**1. Arduino Circuit**](#1-arduino-circuit)

[**2. Arduino Program**](#2-arduino-program)

[**3. NodeJS Server**](#3-nodejs-server)

[**4. Front-end**](#4-front-end)

[**5. Back-end**](#5-back-end)

[**6. *CONNECTING EVERYTHING***](#6-connecting-everything)

------------

## 0. Basic Setup
### Before doing anything, you need to clone this repo on your machine. This guide will not go in-depth about the coding used or the theory behind everything, it'll be much more pratical.
### Nonetheless, if you have an intermediate knowledge in front-end dev with HTML/CSS/JS and some basic understanding of Electronics and Arduino you'll be able to understand and learn from this program/guide.
### To clone this repo, you will need [Git](https://git-scm.com/) [installed and configured](https://techpp.com/2021/09/03/install-git-on-windows-guide/). After installing it, open Git Bash and go to a desired folder where you want your project (for example, the Documents folder).
### Then, you will clone this repository with the following command:
	git clone https://github.com/jv-aquino/Arduino-Javascript.git

### The final thing you need to do before we get started is to [download Visual Studio Code](https://code.visualstudio.com/), which will be used to run most of our code.

------------

## 1. Arduino Circuit
### You will need:
- 3 LEDs (with different colors, if possible);
- 3 3 resistors of 220 Ω
- 1 Protoboard;
- 1 Arduino;
- Some cables
### Take the materials above and assemble the circuit following the image:
![Circuit Image](./arduino/circuit.png)

------------

## 2. Arduino Program
### To write the .ino program - which will be loaded in the Arduino so it can wait for the instructions later - you will need to [install the Arduino IDE](https://www.arduino.cc/en/software/#legacy-ide-18x)*
*in this case we are using the legacy version which is supported by pretty much any computer, but you can also use the 2.0 version if you want to
### After downloading it, we will need to configure the IDE to run the program in our Arduino ->
1. Open the Arduino IDE and go to **File > Open > (find the path and click on arduino.ino)**
2. Connect the Arduino to some USB Port of your PC
3. On the Arduino IDE, go to **Tools > Board > (select your Arduino Board)** 
4. Then, go to **Tools > Port > COMX (Arduino (your model))**
5. ***Write down the COMX, we'll need it in the next section* (in this case, mine is COM10)**
6. Finally, click on the Upload (->) button to load the program on the Arduino.

![Arduino IDE Print](https://i.imgur.com/Q3As1Lz.png)

### Besides handling the information received by the server, the Arduino program is also using a logic that uses numbers from 0 to 7 to represent which LEDs are on, where 0 refers to all leds being OFF and 7 refers to all leds being ON.

------------

## 3. NodeJS Server
### To connect the Arduino with our webpage, we'll need a server. NodeJS is an engine used to run JavaScript outside of the browser and transform JS in a back-end language like PHP, Python and Ruby. 
### In order to configure our server you need to ->
1. [Download NodeJS (LTS)](https://nodejs.org/en/) 
2. Open Visual Studio Code and go to **File > Open Folder > (find and select Arduino-Javascript)**
3. Open the file explorer on VS Code and open **server > app.js**. There, you will need to change the port path to your own **COM port** (mine is COM10 in this case):

![NodeJS Port Config](https://i.imgur.com/UZ0qrj8.png)

------------

## 4. Front-end
### The front-end is the visual part of our project, in this case it'll be used to change the exhibit  inform the user which LEDs are on or off on the website, and to see it we will use the **[Live Server extension of VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**. So, ->
1. **[Install](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** the extension
2. Click on the explorer section of VS Code and click on **dist > index.html**
3. Click on ***Go live*** in the bottom right corner.
4. Play around with the site! For now it'll not do anything because we've not turned on the server yet and we haven't explained the "Back-end"!

![Go Live Image](https://i.imgur.com/bUD2teP.png)
![Webpage Print](https://i.imgur.com/TWaJvNX.png)

------------

## 5. Back-end
### The Back-end is the part responsible for connecting the Webpage with a Server or a Database. In this case, our Back-end is informing the server which LEDs are on and which are off, so that the server can send this information to the Arduino Board that will handle the Electronics logic.
### Our Back-end, besides the JS logic of switching the user interface and consequently the page status, is basically resumed in 2 files: [info.js](./src/info.js) (which holds all the LEDs Info) and [node.js](./src/node.js) (responsible for sending the Info to the NodeJS Server).

### Like explained above, the **info.js** handles all the Information stuff and can change its properties. But the program responsible for coordinating all the logic is [index.js](./src/index.js), which is controlling all the logic on the Controller module. This module controls all the js logic by: connecting the UI with the Dom module, changing the Info and also calling the Node module when we need to send new Info to the Server.

![info.js file print](https://i.imgur.com/ApvPGk5.png)

### The **node.js** file is getting the Info and using the same logic inside the Arduino program (0 for all LEDs off, 7 for all LEDs on) in order to send the right number based on the current Info situation. 
### In order to send this information to the Server, we're using WebSocket, which is a technology used to send and receive packets of information via websites to Servers or Databases, and in this is just send a message with a status of the LEDs, and this status has the value that will be send to the Arduino.

![node.js file print](https://i.imgur.com/pQhXHX9.png)

------------

## 6. CONNECTING EVERYTHING
### The final thing that we will need to do after all this guide is to (finally) **TURN ON THE SERVER!** In order to do that, we'll **review *some* steps** and then execute NodeJS. So let's do it ->
1. Assemble the Arduino Circuit
2. Connect the Arduino to the PC
3. Open the Arduino IDE and Upload the program to the Arduino
4. Open VS Code and open the Arduino-Javascript project
5. Open the Web Page (index.html) in your browser
6. Open the VS Code terminal by clicking on **Terminal > New Terminal**
7. Turn on the NodeJS Server by typing

------------

	node ./server/app.js
------------
8. **Reload the Web Page and Have fun!!!!**

![App working](https://i.imgur.com/zL63Zsh.jpg)
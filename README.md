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

![Arduino IDE Print](https://i.imgur.com/Q3As1Lz.png)

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

------------

## 5. Back-end

------------

## 6. CONNECTING EVERYTHING
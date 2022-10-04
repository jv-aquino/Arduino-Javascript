int greenPin = 2;
int yellowPin = 4;
int redPin = 6;
 
void setup() 
{ 
  pinMode(greenPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(redPin, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {    
    String receivedString = "";
    
    while (Serial.available() > 0) {
      receivedString += char(Serial.read());
    }
    
    Serial.println(receivedString);
    
    if(receivedString == "0") {
      digitalWrite(greenPin, LOW);
      digitalWrite(yellowPin, LOW);
      digitalWrite(redPin, LOW);
    }
    else if (receivedString == "1") {
      digitalWrite(greenPin, HIGH);
      digitalWrite(yellowPin, LOW);
      digitalWrite(redPin, LOW);
    }
    else if (receivedString == "2") {
      digitalWrite(yellowPin, HIGH);
      digitalWrite(greenPin, LOW);
      digitalWrite(redPin, LOW);
    }
    else if (receivedString == "3") {
      digitalWrite(redPin, HIGH);
      digitalWrite(greenPin, LOW);
      digitalWrite(yellowPin, LOW);
    }
    else if (receivedString == "4") {
      digitalWrite(redPin, LOW);
      digitalWrite(greenPin, HIGH);
      digitalWrite(yellowPin, HIGH);
    }
    else if (receivedString == "5") {
      digitalWrite(redPin, HIGH);
      digitalWrite(greenPin, HIGH);
      digitalWrite(yellowPin, LOW);
    }
    else if (receivedString == "6") {
      digitalWrite(redPin, HIGH);
      digitalWrite(greenPin, LOW);
      digitalWrite(yellowPin, HIGH);
    }
    else if (receivedString == "7") {
      digitalWrite(redPin, HIGH);
      digitalWrite(greenPin, HIGH);
      digitalWrite(yellowPin, HIGH);
    }
  }
}

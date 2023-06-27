import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import {
  MainContainer,
  Header,
  OperationArea,
  OperationText,
  ResultArea,
  Result,
  EqualSignArea,
  EqualSignText,
  ResultText,
  BtnContainer,
  BtnArea,
  Btn,
  OthersBtn,
  BtnClean,
  BtnOperation,
  BtnResult,
  BtnText,
  BtnOperationText,
} from "../../styles/Calculator/styles";

const buttons = [
  ['C', "+/-", '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['.', '0', "DEL", '=']
];

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const [result, setResult] = useState("");

  function calculator() {
    const splitValues = currentNumber.split(' ');
    let result = parseFloat(splitValues[0]);

    for(let i = 1; i < splitValues.length; i += 2) {
      const operator = splitValues[i];
      const value = parseFloat(splitValues[i + 1]);

      switch (operator) {
        case '+':
          result += value;
          break;
        case '-':
          result -= value;
          break;
        case 'x':
          result *= value;
          break;
        case '÷':
          result /= value;
          break;
      };

      if(operator === "+/-") {
        result *= -1;
      } else if (operator === '%') {
        result /= 100;
      };
    };

    setResult(result.toFixed(2).toString());
  };

  function handleInput(buttonPressed) {
    console.log(buttonPressed);

    if(['+', '-', 'x', '÷', "+/-", '%'].includes(buttonPressed)) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
    } else if(buttonPressed === '=') {
      calculator();
    } else if(buttonPressed === 'C') {
      setCurrentNumber('');
      setResult('');
    } else if(buttonPressed === 'DEL') {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
    } else {
      setCurrentNumber(currentNumber + buttonPressed);
    };
  };

  return (
    <MainContainer>
      <Header>
        <OperationArea>
          <OperationText>{currentNumber}</OperationText>
        </OperationArea>

        <ResultArea>
          <EqualSignArea>
            <EqualSignText>=</EqualSignText>
          </EqualSignArea>

          <Result>
            <ResultText>{result}</ResultText>
          </Result>
        </ResultArea>
      </Header>

      <BtnContainer>
        {
          buttons.map((buttonLine, buttonIndex) => (
            <BtnArea key={buttonIndex}>
              {
                buttonLine.map((button, buttonIndex) => {
                  if(button === 'C') {
                    return (
                      <BtnClean key={buttonIndex} onPress={() => handleInput(button)}>
                        <BtnText>{button}</BtnText>
                      </BtnClean>
                    );
                  } else if(button === "+/-") {
                    return (
                      <OthersBtn key={buttonIndex} onPress={() => handleInput(button)}>
                        <Image source={require("../../../assets/img/signal/white/signal-1.5x.png")} />
                      </OthersBtn>
                    );
                  } else if(button === '%') {
                    return (
                      <OthersBtn key={buttonIndex} onPress={() => handleInput(button)}>
                        <BtnText>{button}</BtnText>
                      </OthersBtn>
                    );
                  } else if(button === '÷' || button === 'x' || button === '-' || button === '+') {
                    return (
                      <BtnOperation key={buttonIndex} onPress={() => handleInput(button)}>
                        <BtnOperationText>{button}</BtnOperationText>
                      </BtnOperation>
                    );
                  } else if(button === '=') {
                    return (
                      <BtnResult key={buttonIndex} onPress={() => handleInput(button)}>
                        <BtnText>{button}</BtnText>
                      </BtnResult>
                    );
                  } else if(button === "DEL") {
                    return (
                      <Btn key={buttonIndex} onPress={() => handleInput(button)}>
                        <Image source={require("../../../assets/img/delete/white/delete-1x.png")} />
                      </Btn>
                    );
                  } else {
                    return (
                      <Btn key={buttonIndex} onPress={() => handleInput(button)}>
                        <BtnText>{button}</BtnText>
                      </Btn>
                    );
                  }
                })
              }
            </BtnArea>
          ))
        }
      </BtnContainer>
    </MainContainer>
  );
}
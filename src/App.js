import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const getValue = (number) => { // função do desafio!!!
    let sum = 0;
    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber) || !Number.isInteger(parsedNumber) || parsedNumber <= 0) {
      alert("Por favor, insira um número inteiro e positivo!");
      setNumber("");

      return "";
    } else {
        for (let i = 0; i < parsedNumber; i++) {
          if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
          }
      }

      return sum;
    }
  }

  return (
    <div className="App" style={{ width: "70%", margin: "0 auto", }}>
      <h1>Desafio 1 - Escribo Inovação para o Aprendizado</h1>
      <h3 style={{ marginTop: "5%" }}>Insira um número inteiro positivo e será retornado a soma de todos os valores
        inteiros divisíveis por 3 ou 5<br /> que sejam inferiores ao número inserido.
      </h3>
      <input
        style={{ marginTop: "2%" }}
        placeholder="Insira o número..."
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setFinalValue(getValue(number))}>Enviar</button>
      <br />
      {
        finalValue !== ""
        ? <h1>Soma: {finalValue}</h1>
        : null
      }
    </div>
  );
}

export default App;

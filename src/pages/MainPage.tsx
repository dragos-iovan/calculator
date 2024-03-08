import React from 'react'
import './MainPage.css'

const MainPage: React.FC = () => {
  return (
    <>
      <main id="calculatorScreen">
        <section id="display"><p className="operand">10</p><p className="operator">+</p><p className="operand">5</p></section>
        <section id="buttons" className="grid-container">
          <button id="btnClear" className="btnBlue">C</button>
          <button id="btnBackspace" className="btnBlue">&larr;</button>
          <button id="btnPercent" className="btnBlue">%</button>
          <button id="btnDivide" className="btnBlue">/</button>
          <button id="btn7">7</button>
          <button id="btn8">8</button>
          <button id="btn9">9</button>
          <button id="btnMultiply" className="btnBlue">x</button>
          <button id="btn4">4</button>
          <button id="btn5">5</button>
          <button id="btn6">6</button>
          <button id="btnSubtract" className="btnBlue">-</button>
          <button id="btn1">1</button>
          <button id="btn2">2</button>
          <button id="btn3">3</button>
          <button id="btnAdd" className="btnBlue">+</button>
          <button id="btnFactorial" className="btnBlue">x!</button>
          <button id="btn0">0</button>
          <button id="btnDecimalSeparator" className="btnBlue">.</button>
          <button id="btnEquals">=</button>
        </section>
      </main>
    </>
  )
}

export default MainPage;

import {React} from 'react'

const MainPage: React.FC = () => {
  return (
    <>
      <main>
        <section id="display"></section>
        <section id="buttons">
          <button id="btnClear">C</button>
          <button id="btnAdd">+</button>
          <button id="btnSubtract">-</button>
          <button id="btnMultiply">x</button>
          <button id="btnDivide">/</button>
          <button id="btnPercent">%</button>
          <button id="btnFactorial">x!</button> 
          <button id="btnEquals">=</button>
          <button id="btnDecimalSeparator">=</button>
          <button id="btn0">0</button>
          <button id="btn1">1</button>
          <button id="btn2">2</button>
          <button id="btn3">3</button>
          <button id="btn4">4</button>
          <button id="btn5">5</button>
          <button id="btn6">6</button>
          <button id="btn7">7</button>
          <button id="btn8">8</button>
          <button id="btn9">9</button>
        </section>
      </main>
    </>
  )
}

export default MainPage;
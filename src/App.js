import React, { useReducer } from 'react';
import "./styles.css";

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
}

function reducer(state, action) {

}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
  <div className="calc-grid">
    <div className="output">
      <div className="prev-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
    <button id="btn-C">C</button>
    <button id="btn-neg">+-</button>
    <button id="btn-per">%</button>
    <button id="btn-div">/</button>
    <button id="btn-7">7</button>
    <button id="btn-8">8</button>
    <button id="btn-9">9</button>
    <button id="btn-x">x</button>
    <button id="btn-4">4</button>
    <button id="btn-5">5</button>
    <button id="btn-6">6</button>
    <button id="btn-min">-</button>
    <button id="btn-1">1</button>
    <button id="btn-2">2</button>
    <button id="btn-3">3</button>
    <button id="btn-add">+</button>
    <button id="btn-0">0</button>
    <button id="btn-dec">.</button>
    <button id="btn-equal">=</button>
  </div>
  )
};

export default App;

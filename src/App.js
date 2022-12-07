import React, { useReducer } from 'react';
import "./styles.css";
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

//calc actions
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if(payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
    }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
    return {
      ...state,
      previousOperand: evaluate(state),
      operation: payload.operation,
      currentOperand: null
    }
    case ACTIONS.CLEAR:
      return {}
  }
}

function evaluate({ currentOperand, previousOperand, operation}) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ''
  let computation = ''
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "x":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
  }
  return computation.toString()
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

  return (
  <div className="calc-grid">
    <div className="output">
      <div className="prev-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
    <button id="btn-C" onClick={() => dispatch({ type: ACTIONS.CLEAR})}>C</button>
    <DigitButton digit="+-" dispatch={dispatch}/>
    <DigitButton digit="%" dispatch={dispatch}/>
    <OperationButton operation="/" dispatch={dispatch}/>
    <DigitButton digit="7" dispatch={dispatch}/>
    <DigitButton digit="8" dispatch={dispatch}/>
    <DigitButton digit="9" dispatch={dispatch}/>
    <OperationButton operation="x" dispatch={dispatch}/>
    <DigitButton digit="4" dispatch={dispatch}/>
    <DigitButton digit="5" dispatch={dispatch}/>
    <DigitButton digit="6" dispatch={dispatch}/>
    <OperationButton operation="-" dispatch={dispatch}/>
    <DigitButton digit="1" dispatch={dispatch}/>
    <DigitButton digit="2" dispatch={dispatch}/>
    <DigitButton digit="3" dispatch={dispatch}/>
    <OperationButton operation="+" dispatch={dispatch}/>
    <DigitButton digit="0" dispatch={dispatch}/>
    <DigitButton digit="." dispatch={dispatch}/>
    <button id="btn-equal">=</button>
  </div>
  )
};

export default App;

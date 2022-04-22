import React, { useState } from 'react';
import CalculatorButton from './calculator_button';

const buttons = [
  {
    label: 'AC',
    isOperation: true,
  },
  {
    label: '+/-',
    isOperation: true,
  },
  {
    label: '%',
    isOperation: true,
  },
  {
    label: '÷',
    isOperation: true,
  },
  {
    label: '7',
    isOperation: false,
  },
  {
    label: '8',
    isOperation: false,
  },
  {
    label: '9',
    isOperation: false,
  },
  {
    label: 'x',
    isOperation: true,
  },
  {
    label: '4',
    isOperation: false,
  },
  {
    label: '5',
    isOperation: false,
  },
  {
    label: '6',
    isOperation: false,
  },

  {
    label: '-',
    isOperation: true,
  },
  {
    label: '1',
    isOperation: false,
  },

  {
    label: '2',
    isOperation: false,
  },
  {
    label: '3',
    isOperation: false,
  },

  {
    label: '+',
    isOperation: false,
  },

  {
    label: '0',
    isOperation: false,
  },
  {
    label: '.',
    isOperation: true,
  },
  {
    label: '=',
    isOperation: true,
  },

];

function Calculator() {
  const [stateValue, setStateValue] = useState({
    total: null,
    next: '0',
    operation: null,
  });

  const valueChange = (calc) => {
    setStateValue({ ...calc });
  };
  const { total, next, operation } = stateValue;
  return (
    <div className="calc-wrapper">
      <input type="text" placeholder="0" className="calc-input" value={total !== null && next == null ? total : next} readOnly />
      <p hidden>{operation}</p>
      <div className="buttons-container">
        {
          buttons.map((button) => (
            <CalculatorButton
              label={button.label}
              valueChange={valueChange}
              key={button.label}
              calcObject={stateValue}
            />
          ))
      }
      </div>
    </div>
  );
}
export default Calculator;

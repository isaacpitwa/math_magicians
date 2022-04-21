/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-array-index-key */
import React from 'react';
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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      total: null,
      next: '0',
      operation: null,
    };
    this.valueChange = this.valueChange.bind(this);
  }

  valueChange(calc) {
    this.setState({ ...calc });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc-wrapper">
        <input type="text" placeholder="0" className="calc-input" value={total !== null && next == null ? total : next} readOnly />
        <div className="buttons-container">
          {
            buttons.map((button, index) => (
              <CalculatorButton
                label={button.label}
                valueChange={this.valueChange}
                key={index}
                calcObject={this.state}
              />
            ))
        }
        </div>
      </div>
    );
  }
}

export default Calculator;

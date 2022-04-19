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
    };
    this.valueChange = this.valueChange.bind(this);
  }

  valueChange(newValue) {
    this.setState((prevState) => ({ value: prevState.value.concat(newValue) }));
  }

  render() {
    const { value } = this.state;
    return (
      <div className="calc-wrapper">
        <input type="text" placeholder="0" className="calc-input" value={value} />
        <div className="buttons-container">
          {
            buttons.map((button, index) => (
              <CalculatorButton
                label={button.label}
                isOperation={button.isOperation}
                valueChange={this.valueChange}
                key={index}
              />
            ))
        }
        </div>
      </div>
    );
  }
}

export default Calculator;

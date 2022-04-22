import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      label, valueChange, calcObject,
    } = this.props;
    const calc = calculate(calcObject, label);
    valueChange(calc);
  }

  render() {
    const { label } = this.props;
    return (
      <button type="button" className={`calc-btn ${label === '0' ? 'zero-btn' : ' '}`} onClick={this.handleClick}>{label}</button>
    );
  }
}

CalculatorButton.propTypes = {
  label: PropTypes.string,
  valueChange: PropTypes.func,
  calcObject: PropTypes.objectOf({
    total: PropTypes.string,
    next: PropTypes.string.isRequired,
    operation: PropTypes.string,
  }),
};

// Creating default props
CalculatorButton.defaultProps = {
  label: 'Button Label',
  valueChange: () => {},
  calcObject: {
    total: null,
    next: '0',
    operation: null,
  },
};
export default CalculatorButton;

import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { label, isOperation, valueChange } = this.props;
    if (isOperation) {
      // Handle Arithmetic Operations
    }
    // update input value
    if (label === 'AC') {
      valueChange('');
      return;
    }
    valueChange(label);
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
  isOperation: PropTypes.bool,
  valueChange: PropTypes.func,
};

// Creating default props
CalculatorButton.defaultProps = {
  label: 'Button Label',
  isOperation: false,
  valueChange: () => {},
};
export default CalculatorButton;

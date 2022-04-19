import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOperation } = this.props;
    if (isOperation) {
      // Handle Arithmetic Operations
    }
    // update input value
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
};

// Creating default props
CalculatorButton.defaultProps = {
  label: 'Button Label',
  isOperation: false,
};
export default CalculatorButton;

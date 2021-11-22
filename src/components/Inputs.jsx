import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends Component {
  render() {
    const { type, name, label, onChange, value, id, testid } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          data-testid={ testid }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  testid: PropTypes.string,
};

Inputs.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
  testid: '',
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends Component {
  render() {
    const { type, name, label, onChange, value, datatestid } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        { type === 'number' ? <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ datatestid }
          min="0.00"
          step="0.01"
        /> : <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ datatestid }
        /> }

      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  datatestid: PropTypes.string,
};

Inputs.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  datatestid: '',
};

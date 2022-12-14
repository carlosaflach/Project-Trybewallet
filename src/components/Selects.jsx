import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Selects extends Component {
  render() {
    const { name, label, options, onChange, datatestid } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          data-testid={ datatestid }
          onChange={ onChange }
          id={ name }
        >
          { options.map((op, index) => (
            <option key={ index } value={ op } id={ name } data-testid={ op }>
              { op }
            </option>))}
        </select>
      </label>
    );
  }
}

Selects.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
};

import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button type="button" onClick={ onClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
};

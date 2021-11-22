import React, { Component } from 'react';

export default class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <label htmlFor="expenseValue">
          <input
            type="number"
            data-testid="value-input"
            id="expenseValue"
          />
        </label>
      </div>
    );
  }
}

import React, { Component } from 'react';
import '../CSS/form.css';
import Inputs from '../components/Inputs';
import Selects from '../components/Selects';
import getCurrency from '../services/getCurrency';

const PAYMENT_METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const EXPENSE_TAGS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      paymentMethod: '',
      expenseCategory: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  componentDidMount() {
    getCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleContent() {
    const { value, description } = this.state;
    return (
      <div>
        <Inputs
          type="number"
          name="value"
          label="Valor: "
          value={ value }
          datatestid="value-input"
          onChange={ this.handleChange }
        />
        <Selects
          name="currency"
          label="Moeda: "
          id="currencyInput"
          datatestid="currency-input"
          onChange={ this.handleChange }
        />
        <Selects
          name="paymentMethod"
          label="Método de pagamento: "
          id="methodInput"
          datatestid="method-input"
          options={ PAYMENT_METHODS }
          onChange={ this.handleChange }
        />
        <Selects
          name="expenseCategory"
          label="Categoria: "
          id="categoryInput"
          datatestid="tag-input"
          options={ EXPENSE_TAGS }
          onChange={ this.handleChange }
        />
        <Inputs
          type="text"
          name="description"
          label="Descrição: "
          value={ description }
          id="descriptionInput"
          datatestid="description-input"
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="expensesForm">
        { this.handleContent() }
      </div>
    );
  }
}

export default ExpensesForm;

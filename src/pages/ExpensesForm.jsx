import React, { Component } from 'react';
import '../CSS/form.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Inputs from '../components/Inputs';
import Selects from '../components/Selects';
import Button from '../components/Button';
import Table from '../components/Table';
import { addExpense, requestCurrencies } from '../actions/index';

const PAYMENT_METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const EXPENSE_TAGS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEntries = this.handleEntries.bind(this);
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    addExpenses({ value, description, currency, method, tag });
    this.setState({
      value: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: '',
    });
  }

  handleEntries() {
    const { value, description } = this.state;
    const { getCurrencies } = this.props;
    return (
      <div className="expensesForm">
        <Inputs
          type="text"
          name="value"
          label="Valor: "
          value={ value }
          datatestid="value-input"
          onChange={ this.handleChange }
        />
        {getCurrencies.length && (<Selects
          name="currency"
          label="Moeda: "
          datatestid="currency-input"
          options={ getCurrencies }
          onChange={ this.handleChange }
        />)}
        <Selects
          name="method"
          label="Método de pagamento: "
          datatestid="method-input"
          options={ PAYMENT_METHODS }
          onChange={ this.handleChange }
        />
        <Selects
          name="tag"
          label="Categoria: "
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
        <Button onClick={ this.handleClick } />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.handleEntries()}
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addExpense(payload)),
  fetchApi: () => dispatch(requestCurrencies()),
});

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  addExpenses: Proptypes.func.isRequired,
  fetchApi: Proptypes.func.isRequired,
  getCurrencies: Proptypes.arrayOf(Proptypes.string).isRequired,
};

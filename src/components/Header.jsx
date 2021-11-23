import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../CSS/wallet.css';

class Header extends Component {
  render() {
    const { email } = this.props;
    const { expense } = this.props;
    let currency = '';
    let valor = 0;
    let cambio = 0;
    let total = 0;
    expense.forEach((el) => {
      currency = el.currency;
      valor = el.value;
      cambio = el.exchangeRates[currency].ask;
      total = valor * cambio;
    });

    return (
      <header className="walletHeader">
        <h3 data-testid="email-field">
          Usuário:
          {' '}
          {email}
        </h3>
        <h3 data-testid="total-field">
          Gastos Totais:
          {' '}
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

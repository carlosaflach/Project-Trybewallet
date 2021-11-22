import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../CSS/wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
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
          {0}
        </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

import React from 'react';
import Header from '../components/Header';
import ExpensesForm from './ExpensesForm';
import '../CSS/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;

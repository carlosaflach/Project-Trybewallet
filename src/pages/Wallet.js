import React from 'react';
import Header from '../components/Header';
import ExpensesForm from './ExpensesForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForm />
      </>
    );
  }
}

export default Wallet;

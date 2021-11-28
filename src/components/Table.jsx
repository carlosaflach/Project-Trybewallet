import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../CSS/table.css';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { tableContent } = this.props;
    return (
      <div className="table-expenses">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { tableContent && tableContent.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>
                  {(expense.exchangeRates[expense.currency].name)
                    .replace('/Real Brasileiro', '')}
                </td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  tableContent: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  tableContent: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

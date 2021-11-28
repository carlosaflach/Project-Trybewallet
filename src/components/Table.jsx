// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../CSS/table.css';

class Table extends Component {
  render() {
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
          </thead>
        </table>
      </div>
    );
  }
}

// Table.propTypes = {
//   tableContent: PropTypes.shape({
//     map: PropTypes.func.isRequired,
//   }).isRequired,
// };

// const mapStateToProps = (state) => ({
//   tableContent: state.expenses,
// });

export default Table;

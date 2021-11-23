// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state, currencies: Object.keys(action.currencies),
    };
  case ADD_EXPENSE:
    return { ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length, ...action.payload, exchangeRates: action.thunk }],
    };
  default:
    return state;
  }
};

export default wallet;

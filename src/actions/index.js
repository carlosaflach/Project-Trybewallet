// Coloque aqui suas actions
import getCurrency from '../services/getCurrency';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const addExpense = (payload) => (dispatch) => {
  getCurrency()
    .then((response) => response.json())
    .then((data) => {
      // get help on arthur lemos repository Source: https://github.com/tryber/sd-015-a-project-trybewallet/pull/90/commits/8d2741541f1bcef211ec8864000d94721d45f210
      dispatch({ type: ADD_EXPENSE, payload, thunk: data });
    });
};

export const requestCurrencies = () => (dispatch) => {
  getCurrency()
    .then((response) => response.json())
    .then((currencies) => {
      delete currencies.USDT; // Delete operator source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
      dispatch({ type: REQUEST_CURRENCIES, currencies });
    });
};

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  expenses: payload,
});

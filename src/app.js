import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux'; 
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter.js';

import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });

store.dispatch(addExpense({ description: 'Water Bill', amount: 3000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2500, createdAt: 1000 }));
store.dispatch(setTextFilter('water'));
setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000)

const jsx = (
    // <AppRouter />
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
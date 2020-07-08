import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './productsReducer';
import initialState from './initialState';

const middlewares = [thunk];

createStore(productsReducer, initialState, applyMiddleware(...middlewares));

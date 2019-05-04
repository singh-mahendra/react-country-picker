import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';

// components / reducers
import AppLayout from '../layouts/AppLayout';
import rootReducer from '../reducers';
import {loadData} from '../sagas/rootSaga';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
/* eslint-enable */

// initial store setup
const sagaMiddleware = createSageMiddleware();
const configureStore = (initialState) => {
    const enhancers = [applyMiddleware(logger,sagaMiddleware)];
    return createStore(rootReducer, initialState, composeEnhancers(...enhancers));

};
// create store
const store = configureStore({});
sagaMiddleware.run(loadData);

// wrap rest of the App in a provider
const AppContainer = () => (
    <Provider store={store}>
        <AppLayout />
    </Provider>
);

export default AppContainer;
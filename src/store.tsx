import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducer/index';
import { RootState } from './store/rootState';
import logger from 'redux-logger';

const store = createStore<RootState>(
    rootReducer,
    applyMiddleware(logger)
);

export default store;
import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducer/index';
import { RootState } from './store/rootState';
// import { StoreState } from './types/index';
// import { GameProps } from './containers/Game';
import logger from 'redux-logger';

const store = createStore<RootState>(
    rootReducer,
    applyMiddleware(logger)
);

export default store;
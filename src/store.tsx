import { applyMiddleware , createStore } from 'redux';
import game from './reducer/game';
import { StoreState } from './types/index';
import logger from 'redux-logger';

const store = createStore<StoreState>(
    game,
    applyMiddleware(logger)
);

export default store;
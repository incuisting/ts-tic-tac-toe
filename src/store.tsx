import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducer/index';
import { StoreState } from './types/index';
import { GameProps } from './containers/Game';
import logger from 'redux-logger';

const store = createStore<StoreState<GameProps>>(
    rootReducer,
    applyMiddleware(logger)
);

export default store;
import { createStore } from 'redux';
import game from './reducer/game';
import { StoreState } from './types/index';

const store = createStore<StoreState>(game);

export default store;
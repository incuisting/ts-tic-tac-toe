import { combineReducers } from 'redux';
import { RootState } from '../store/rootState';
import gameReducer from '../reducer/game';

export default combineReducers<RootState>({
    game: gameReducer,
}); 
import { combineReducers } from 'redux';
import { StoreState } from '../types/index';
import { GameProps } from '../containers/Game';
import game from '../reducer/game';

export default combineReducers<StoreState<GameProps>>({
    game
}); 
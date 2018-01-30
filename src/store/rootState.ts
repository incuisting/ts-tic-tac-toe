import { GameState } from '../reducer/game';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    game: GameState;
}

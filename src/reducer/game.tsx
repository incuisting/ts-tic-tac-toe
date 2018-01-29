import { handleActions } from 'redux-actions';
// import { HandleClick, JumpTo } from '../actions/gameActions';
import { History, StepNumber, XIsNext } from '../actions/gameActions';

export interface GameState {
    history: History;
    stepNumber: StepNumber;
    xIsNext: XIsNext;
}
const defaultState = {
    history: [{
        squares: new Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true
};

export default handleActions<GameState, GameState>(
    {
        ['HANDLE_CLICK']: (state, action) => {
            return Object.assign({}, state, {
                history: action.payload ? action.payload.history : state.history,
                stepNumber: action.payload ? action.payload.stepNumber : state.stepNumber,
                xIsNext: action.payload ? action.payload.xIsNext : state.xIsNext
            });
        },
        ['JUMP_TO']: (state, action) => {
            return Object.assign({}, state, {
                stepNumber: action.payload ? action.payload.stepNumber : state.stepNumber,
                xIsNext: action.payload ? action.payload.xIsNext : state.xIsNext
            });
        }
    },
    defaultState);

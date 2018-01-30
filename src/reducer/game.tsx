import { handleActions } from 'redux-actions';
// import { HandleClick, JumpTo } from '../actions/gameActions';
import { History, StepNumber, XIsNext } from '../actions/gameActions';

// readonly 可以使得代码在编译时和编写时 该状态是只读的，但是一旦编译之后就没有作用了  
export interface GameState {
    readonly history: History;
    readonly stepNumber: StepNumber;
    readonly xIsNext: XIsNext;
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

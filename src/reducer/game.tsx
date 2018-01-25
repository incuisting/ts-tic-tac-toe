import { handleActions } from 'redux-actions';
import { HandleClick } from '../actions/gameActions';

interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
}

const defaultState = {
    history: [{
        squares: new Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true
};

export default handleActions(
    {
        ['HANDLE_CLICK']: (state, action: Action<HandleClick>) => {
            return Object.assign({}, state, {
                history: action.payload.history,
                stepNumber: action.payload.stepNumber,
                xIsNext: action.payload.xIsNext
            });
        }
    },
    defaultState);

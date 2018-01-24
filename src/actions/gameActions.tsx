import { createActions } from 'redux-actions';

export interface HandleClick {
    history: Array<{
        squares: Array<string | null>
    }>;
    xIsNext: boolean;
    stepNumber: number;
}
// interface GameActions {

// }

export const gameActions = createActions({
    'HANDLE_CLICK': ({ history, stepNumber, xIsNext }: HandleClick) => ({ history, stepNumber, xIsNext }),
});
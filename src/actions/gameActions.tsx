import { createAction } from 'redux-actions';

type History = Array<{ squares: Array<string | null>; }>;
type XIsNext = boolean;
type StepNumber = number;

export interface HandleClick {
  history: Array<{
    squares: Array<string | null>
  }>;
  xIsNext: boolean;
  stepNumber: number;
}

export interface JumpTo {
  xIsNext: boolean;
  stepNumber: number;
}

export const gameActions = {
  handelClick: createAction(
    'HANDLE_CLICK',
    (
      history: History,
      stepNumber: StepNumber,
      xIsNext: XIsNext
    ) => {
      // console.log('actions', history, stepNumber, xIsNext);
      return { history, stepNumber, xIsNext };
    }
  ),
  jumpTo: createAction(
    'JUMP_TO',
    (
      stepNumber: StepNumber,
      xIsNext: XIsNext
    ) => {
      return { stepNumber, xIsNext };
    }
  )
};

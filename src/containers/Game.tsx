import { Game } from '../components/Game';
import { gameActions } from '../actions/gameActions';
import { connect, Dispatch } from 'react-redux';
import { GameProps } from '../components/Game';
import { StoreState } from '../types';
const mapStateToProps = (state: StoreState) => {
    return {
        history: state.history,
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber
    };
};

export function mapDispatchToProps(dispatch: Dispatch<GameProps>) {
    return {
        handleClick: ({ history, xIsNext, stepNumber }: GameProps) =>
            dispatch(gameActions.handleClick(history, xIsNext, stepNumber))
    };
}

export default connect<StoreState, {}, {}>(mapStateToProps, mapDispatchToProps)(Game);
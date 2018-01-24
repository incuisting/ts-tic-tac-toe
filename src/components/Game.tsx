import * as React from 'react';
import { Board } from './Board';
import styled from 'styled-components';

const GameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const GameInfo = styled.div`
    margin-left: 20px;
`;

export interface GameProps {
    // history 为复杂类型的数组
    history: Array<{
        squares: Array<string | null>
    }>;
    xIsNext: boolean;
    stepNumber: number;
    handleClick?: (a: any, b: any, c: any) => any;
}

interface State {
}

export class Game extends React.Component<GameProps, State> {
    constructor(props: GameProps) {
        super(props);
    }
    handleClickin(i: number) {
        const history = this.props.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.props.xIsNext ? 'X' : 'O';
        let a = history.concat([{ squares: squares }]);
        let stepNumber = history.length;
        let xIsNext = !this.props.xIsNext;
        this.props.handleClick(a, xIsNext, stepNumber);
    }
    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        });
    }
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                `Move # ${move}` :
                `Game start`;
            return (
                <li key={move} >
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }
        return (
            <GameWrapper>
                <div>
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClickin(i)}
                    />
                </div>
                <GameInfo>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </GameInfo>
            </GameWrapper>
        );
    }
}

// 胜负判断
function calculateWinner(squares: Array<null | string>) {
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
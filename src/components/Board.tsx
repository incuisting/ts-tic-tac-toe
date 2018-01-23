import * as React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

interface Props {
    squares: Array<null | string>;
    onClick: (i: number) => void;
}

// interface State {
//     squares: Array<null | string>;
//     xIsNext: boolean;
// }

const BoardRow = styled.div`
    &:after{
        clear: both;
        content: "";
        display: table;
    }
`;

const Status = styled.div`
    margin-bottom: 10px;
`;
export class Board extends React.Component<Props, {}> {
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />);
    }
    render() {
        return (
            <div>
                <Status>{status}</Status>
                <BoardRow>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BoardRow>
                <BoardRow>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BoardRow>
            </div>
        );
    }
}
import * as React from 'react';

interface SquareProps {
    value: number;
}

export class Square extends React.Component<SquareProps, {}> {
    render() {
        const { value } = this.props;
        return (
            <button className="square">
                {value}
            </button>
        );
    }
}
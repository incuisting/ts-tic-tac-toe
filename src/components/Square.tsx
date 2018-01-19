import * as React from 'react';

interface Props {
    value: number;
}

interface State {
    value: string | null;
}

export class Square extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        const { value } = this.state    ;
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {value}
            </button>
        );
    }
}
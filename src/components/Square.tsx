import * as React from 'react';

interface Props { // 定义prop的接口
    value: string | null; // 定义传入value的类型 为一个Union Types
    onClick: () => void;
}

export function Square(props: Props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
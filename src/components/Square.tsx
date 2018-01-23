import * as React from 'react';
import styled from 'styled-components';

interface Props { // 定义prop的接口
    value: string | null; // 定义传入value的类型 为一个Union Types
    onClick: () => void;
    className?: string;
}

function SquareBody(props: Props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export const Square = styled(SquareBody) `
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
    &:focus{
        outline: none;
    }
    &:active{
        background: #ddd;        
    }
`;
import React from 'react';
import styled, { css } from 'styled-components';
// import { MdDone } from 'react-icons/md';

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const CheckCircle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: 1px solid red;
            color: red;
            background-color: red;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 14px;
    color: #495057;
`;

function TodoItem({ text, done }) {
    return (
        <TodoItemBlock>
            <Text>{text}</Text>
            <CheckCircle done={done}>{done}</CheckCircle>
        </TodoItemBlock>
    );
}

export default TodoItem;
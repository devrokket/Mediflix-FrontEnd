import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import plusButton from "../assets/imgs/plusbutton.png";
import { style } from "@mui/system";
 
const TodoListBlock = styled.div`
    flex: 1;
    padding: 10px 0px;
    padding-bottom: 48px;
    overflow-x: auto;
`;

const TodoItemBox = styled.div`
  margin-bottom: 10px;
  border-radius: 16px;
  width: 220px;
  height: 80px;
  border: 0.5px solid black;
  align-items: center;
`;

const PlusButton = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 100%;
`;


function TodoList() {
    return (
        <TodoListBlock>
            <TodoItemBox>
                <TodoItem text="[LIFE 실시간 인기 게시글]
                 직전주 LIFE 신규 게시글 리뷰하기" done={true} />
            </TodoItemBox>
            <TodoItemBox>
                <TodoItem text="[LIFE 실시간 인기 게시글]
                1분기 페이지 이탈률 정리 후 보고" done={true} />
            </TodoItemBox>  
            <TodoItemBox>              
                <TodoItem text="[ONAIR 콘텐츠 관리]
                ONAIR 콘텐츠 실시간 모니터링 보고서 작성" done={false} />
            </TodoItemBox>
            <TodoItemBox>
                <PlusButton img src={ plusButton } />
            </TodoItemBox>
        </TodoListBlock>       
    );
}
 
export default TodoList;
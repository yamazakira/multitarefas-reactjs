import styled from "styled-components";

export const TodoWrapper = styled.div`
    place-items: center;
    background-color: green;
    margin: 2dvh auto;
    width: 50dvh;
  
`;

export const TodoInput = styled.div`
    display: flex;
    justify-content: center;
    place-items: center;
    background-color: purple;
    padding: 1dvh;
`;

export const TodoInputText = styled.input`
    background-color: black;
    width: 30rem
`;
export const TodoInputSubmit = styled.button`
    background-color: red;
`;

export const TodoItemList = styled.ul`
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
    background: orange;
    list-style-type:none;
    padding: 0;
    margin: 0;
`;

export const TodoItem = styled.li`
    background: black;
    width: 95%;
    margin: 0.5dvh;
    text-align: left;
`;
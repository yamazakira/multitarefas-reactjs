import styled from "styled-components";

export const TodoWrapper = styled.div`
    place-items: center;
    background-color: #243e36;
    margin: 2dvh auto;
    width: 50dvh;
    border-radius: 15px;
    overflow: hidden;
`;

export const TodoInput = styled.div`
    display: flex;
    justify-content: center;
    place-items: center;
    background-color: #243e36;
    margin: 1rem 1rem 1rem 1rem;
    border: 2px solid #7ca982
`;

export const TodoInputText = styled.input`
    background-color: #f1f7ed;
    width: 100%;
    height: 4dvh;
    border: none;
    padding: 5px;
    &::placeholder,
    ::-webkit-input-placeholder {
        color: #243e36;
    }
    color: #243e36;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

export const TodoInputSubmit = styled.button`
    background-color: #004643;
    height: 4dvh;
    border: none;
`;

export const TodoItemList = styled.ul`
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
    background: #243e36;
    list-style-type:none;
    padding: 1rem;
    margin: 0;

    border-top: 1px solid #7ca982;
`;

export const TodoItemText = styled.p.attrs(props => ({
    className: props.className,
}))`
    color: ${props => props.className ? "#243e36" : "#f1f7ed"};
    margin: 0;
    padding: 01dvh 0 01dvh 2dvh;
`;

export const TodoItem = styled.li.attrs(props => ({
    className: props.className,
}))`
    background-color: ${props => props.className ? "#7ca982" : "#f1f7ed"};
    text-decoration-line: ${props => props.className ? "line-through" : "none"};
    &:hover {
        background-color: ${props => props.className ? "#f1f7ed" : "#7ca982"};
        ${TodoItemText}{
            color: #243e36
        }
        cursor: pointer;
    }

    ${TodoItemText}{
        color: ${props => props.className ? "#243e36" : "#39393A"};
    }
    text-decoration-color: #243e36;
    width: 100%;
    margin-top: 0.5dvh;
    text-align: left;
    border-radius: 7px;
`;
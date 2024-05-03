import React, { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import * as S from "./todoStyle.ts"

const TodoItem = ({ tarefa, completar }) => {
  return (
    <S.TodoItem
      className={`${tarefa.completo ? "completo" : ""}`}
      onClick={() => completar(tarefa.id)}
    >
      <S.TodoItemText>
        {tarefa.tarefa}
      </S.TodoItemText>
    </S.TodoItem>
  )
}

export const Todo = () => {
  const [todo, setTodo] = useState('')
  const [listaTodos, setListaTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo)
    setTodo("")
    // console.log(listaTodos)
  }

  const addTodo = (todo) => {
    setListaTodos([...listaTodos, { id: uuidv4(), tarefa: todo, completo: false, isEditing: false }])
    console.log(listaTodos)
  }

  const completar = (id) => {
    setListaTodos(listaTodos.map(todo => todo.id === id ? { ...todo, completo: !todo.completo } : todo))

  }

  return (

    <S.TodoWrapper>
      <h1>To-do List</h1>
      <form
        action="todoForm"
        // addTodo={addTodo}
        onSubmit={handleSubmit}
      >
        <S.TodoInput>
          <S.TodoInputText type="text"
            className="todoInput"
            placeholder="O que deseja adicionar?"
            value={todo}
            onChange={(e) => setTodo(e.target.value)} >

          </S.TodoInputText>
          <S.TodoInputSubmit
            type="submit"
            className='todoSubmit'>
            Adicionar
          </S.TodoInputSubmit>
        </S.TodoInput>

        <S.TodoItemList>
          {listaTodos.map((todo, index) => (
            <TodoItem tarefa={todo} key={index} completar={completar} />
          ))}
        </S.TodoItemList>

      </form>
    </S.TodoWrapper>

  )
}

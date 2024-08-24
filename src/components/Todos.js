import React from 'react'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import '../Assets/style.css'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    
    const todos = useSelector(state => state.todos)
    
    const dispatch = useDispatch()

  return (
    <div className='todo-con'>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <div >{todo.text}</div>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
        ))}
    </div>
  )
}

export default Todos
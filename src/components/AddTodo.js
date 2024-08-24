import React from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import '../Assets/style.css'

const AddTodo = () => {
    const[value, setValue]= useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(value))
        setValue('')
    }

  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type='text' placeholder='Enter Todo' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo
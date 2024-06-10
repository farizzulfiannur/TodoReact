import React, { useState } from 'react'
import '../assets/style/styles.css'


const TodoForm = ({ addTodo }) => {

  const [title, setTitle] =  useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('')
  }

  return (

    <div className="add-bar">
      <form onSubmit={(event) => {
        handleSubmit(event);
      }}>
        <input type="text" placeholder="New Todo..." onChange={(event) => handleChangeTitle(event)} value={title}/>
        <button className="add-button">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
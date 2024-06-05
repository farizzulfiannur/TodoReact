import React from 'react'

const TodoItem = ( { todo } ) => {
  return (
    <p key={ todo.id}> { todo.title } </p>
  )
}

export default TodoItem
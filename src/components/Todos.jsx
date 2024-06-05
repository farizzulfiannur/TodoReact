import React from 'react'
import TodoItem from './TodoItem'


const Todos = ({ todos }) => {
  return (
    // <h1> This is Todos Components </h1>
    <div>
        { todos.map((todo) => {
            return <TodoItem  todo={todo} />
        })}
    </div>
  )
}

export default Todos
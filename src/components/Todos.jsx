import React from 'react'
import TodoItem from './TodoItem'
import '../assets/style/styles.css'

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <>
      <ul className="task-list">
        { todos.map((todo) => {
            return <TodoItem key={todo.id}  todo={todo} toggleCompleted={ toggleCompleted } deleteTodo = {deleteTodo} />
        })}
      </ul>
    </>
  )
}

export default Todos
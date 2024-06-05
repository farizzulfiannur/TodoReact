import React from 'react'
import TodoItem from './TodoItem'


const Todos = ({ todos }) => {
  return (
    // <h1> This is Todos Components </h1>
    <div style={styles.container}>
        { todos.map((todo) => {
            return <TodoItem  todo={todo} />
        })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos
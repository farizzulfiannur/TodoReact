import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { 
        textDecoration: "line-through", 
        color:"white" 
      };
    } else {
      return { textDecoration: "none" };
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteTodo();
  };

  return (
    <>
      <li className="task-item">
        <input type="checkbox" className="task-checkbox" onChange={() => toggleCompleted(todo.id)} />
        <span className="task-text" style={getTodoTitleStyle()}>{todo.title}</span> 
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>🗑️</button>
      </li>
    </>
  );
};

export default TodoItem;

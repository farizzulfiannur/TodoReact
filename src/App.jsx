import { useState, createContext } from 'react'
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import './assets/style/styles.css';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    // console.log(todoId);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    // console.log('This add Todo Function');
    if (todoTitle == "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updateTodos = todos.concat(newTodo);
    setTodos(updateTodos);
  };

  const deleteTodo = (todoId) => {
    console.log("Todo Deleted");
    // console.log(todoId);
    const deleteItem = todos.filter((todo) => todo.id !== todoId);
    console.log(deleteItem);
    setTodos(deleteItem);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted,deleteTodo }}>
    <div className='container'>
        <div className="main-content">
            <h1>My Todo List</h1>
            <TodoForm addTodo={addTodo}/>
            {/* <Todos todos={todos} toggleCompleted={ toggleCompleted } deleteTodo = { deleteTodo }/> */}
            <Todos todos={todos}/>
        </div>
    </div>
    </TodoContext.Provider>
  );
}

export default App;

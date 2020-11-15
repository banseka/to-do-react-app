import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //todo input state
  const [todoInput, setTodoInput] = useState("");

  // todo list state
  const [todos, setTodos] = useState([]);

  //status state
  const [status, setStatus] = useState("all");

  //filter status state
  const [filteredTodos, setFilteredTodos] = useState([]);
  //get local todos from locaal storage useEffect
  useEffect(() => {
    getlocalStorage();
  }, []);

  //useEffect to update UI with filtered todo status
  useEffect(() => {
    filtetedTodosHandler();
    saveLocalStorage();
  }, [todos, status]);

  //filtered status handler
  const filtetedTodosHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save todos to local stoaage
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // get todos from local storage
  const getlocalStorage = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todo'))
      setTodos(localTodos)
      
    }
  };

  return (
    <div className='App'>
      <header className='header'>
        <h1>My todo List </h1>
      </header>
      <Form
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

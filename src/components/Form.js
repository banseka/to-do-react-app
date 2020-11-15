import React from "react";

export default function Form({
  setTodoInput,
  setTodos,
  todos,
  todoInput,
  setStatus,
  
}) {
  //input change handler
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  //handle add todo list function
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { completed: false, todo: todoInput, id: Math.random() * 1000 },
    ]);
    setTodoInput("");
  };
  //status handler function
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form className='input-form'>
        <input
          type='text'
          value={todoInput}
          className='todo-input'
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmitTodo}
          className='addTodo-btn'
          type='submit'
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
          <select onChange={handleStatus} name='filter' className='filter-todo'>
            <option value='all'>All</option>
            <option value='uncompleted'>Uncompleted</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
      </form>
    </div>
  );
}

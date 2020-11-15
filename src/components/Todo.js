import React from 'react'

export default function Todo({text, setTodos, todos, todo}) {

  //trash event function
  const handleTrash =() =>{
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  //complete handler
  const completeHandler =()=>{
    setTodos(todos.map(item=>{
      if (item.id === todo.id) {
        return{
          ...item, completed: !item.complete
        }  
      }
      return item
    }))
  }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.compleed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={handleTrash} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}

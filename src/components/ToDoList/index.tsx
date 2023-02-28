import React from 'react'

const ToDoList = () => {
  return (
    <div className="App">
      <h1>To Do list</h1>
      <div>
        <h5>Title:</h5>
        <input type="text" placeholder='enter title' required/>
      </div>
      <div>
        <h5>Description:</h5>
        <input type="text" placeholder='enter description' required/>
      </div>
      <button>Create</button>
    </div>
  )
}
export default ToDoList
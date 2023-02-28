import React from 'react'

const ToDoList = () => {
  return (
    <div className="App">
      <h1> &lsquo; To Do &rsquo; list</h1>
      <div className="parent" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <h5>Title:</h5>
          <input type="text" placeholder="enter title" required />
        </div>
        <div>
          <h5>Description:</h5>
          <input type="text" placeholder="enter description" required />
        </div>
        <button style={{ width: 177, height: 21, alignSelf: 'flex-end' }}>Create</button>
      </div>
    </div>
  )
}
export default ToDoList

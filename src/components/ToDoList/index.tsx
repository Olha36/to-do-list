import React, { useState } from 'react'

export type ToDo = {
  id: number
  title: string
  description: string
  status: string
}

const ToDoList: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDo[]>([])
  const [titleInput, setTitleInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [error, setError] = useState(false)

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value)
  }

  const handleDescriptionInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(event.target.value)
  }
  const handleCreateToDo = () => {
    if (!titleInput || !descriptionInput) {
      setError(true)
      return
    }
    const newToDo: ToDo = {
      id: toDoList.length + 1,
      title: titleInput,
      description: descriptionInput,
      status: 'in progress',
    }
    setToDoList([...toDoList, newToDo])
    setTitleInput('')
    setDescriptionInput('')
    setError(false)
  }

  const handleToDoClick = (id: number) => {
    const clickedToDo = toDoList.find((toDo) => toDo.id === id)
    if (clickedToDo) {
      // handle displaying modal with to-do details
    }
  }

  return (
    <div className="App">
      <h1> &lsquo; To Do &rsquo; list</h1>
      <div className="parent" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <h5>Title:</h5>
          <input type="text" value={titleInput} onChange={handleTitleInputChange} placeholder="enter title" required />
        </div>
        <div>
          <h5>Description:</h5>
          <input
            type="text"
            value={descriptionInput}
            onChange={handleDescriptionInputChange}
            placeholder="enter description"
            required
          />
        </div>
        <button style={{ width: 177, height: 21, alignSelf: 'flex-end' }} onClick={handleCreateToDo}>
          Create
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>This field is empty</p>}
      <ul>
        {toDoList.map((toDo) => (
          <li
            key={toDo.id}
            onClick={() => handleToDoClick(toDo.id)}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <h3>{toDo.title}</h3>
            <p>{toDo.description}</p>
            <p>Status: {toDo.status}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ToDoList

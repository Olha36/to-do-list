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
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [selectedToDo, setSelectedToDo] = useState<ToDo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value)
    setTitleError(false) // reset title error when input changes
  }

  const handleDescriptionInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(event.target.value)
    setDescriptionError(false) // reset description error when input changes
  }
  const handleCreateToDo = () => {
    if (!titleInput) {
        setTitleError(true)
    }
    if (!descriptionInput) {
        setDescriptionError(true)
    }
    if (!titleInput || !descriptionInput) {
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
  }

  const handleToDoClick = (id: number) => {
    const clickedToDo = toDoList.find((toDo) => toDo.id === id)
    if (clickedToDo) {
        setSelectedToDo(clickedToDo);
        setIsModalOpen(true);
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedToDo(null);
  };

  return (
    <div className="App">
      <h1> &lsquo; To Do &rsquo; list</h1>
      <div className="parent" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <h5>Title:</h5>
          <input type="text" value={titleInput} onChange={handleTitleInputChange} placeholder="enter title" style={{ borderColor: titleError ? 'red' : undefined }} required />
          {titleError && <p style={{ color: 'red' }}>This field is empty</p>}
        </div>
        <div>
          <h5>Description:</h5>
          <input
            type="text"
            value={descriptionInput}
            onChange={handleDescriptionInputChange}
            placeholder="enter description"
            style={{ borderColor: descriptionError ? 'red' : undefined }}
            required
          />
          {descriptionError && <p style={{ color: 'red' }}>This field is empty</p>}
        </div>
        <button style={{ width: 177, height: 21, alignSelf: 'flex-end' }} onClick={handleCreateToDo}>
          Create
        </button>
      </div>
      <ul>
        {toDoList.map((toDo) => (
          <li
            key={toDo.id}
            onClick={() => handleToDoClick(toDo.id)}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <h3>{toDo.id}.  {toDo.title}</h3>
            <p>{toDo.description}</p>
            <p>Status: {toDo.status}</p>
          </li>
        ))}
      </ul>
      {selectedToDo && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleModalClose}>{isModalOpen}&times;</span>
          <h2>{selectedToDo.title}</h2>
          <p>{selectedToDo.description}</p>
          <p>Status: {selectedToDo.status}</p>
        </div>
      </div>
    )}
    </div>
  )
}
export default ToDoList;

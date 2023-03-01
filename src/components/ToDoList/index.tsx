import React, { useState } from 'react'

export type ToDo = {
  id: number;
  title: string;
  description: string;
  status: string;
}

const ToDoList: React.FC = () => {
    const [toDoList, setToDoList] = useState<ToDo[]>([])
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInput(event.target.value);
        };
        
        const handleDescriptionInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionInput(event.target.value);
    };
    const handleCreateToDo = () => {
        const newToDo: ToDo = {
          id: toDoList.length + 1,
          title: titleInput,
          description: descriptionInput,
          status: 'in progress',
        };
        setToDoList([...toDoList, newToDo]);
        setTitleInput('');
        setDescriptionInput('');
      };

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
          <input type="text" value={descriptionInput} onChange={handleDescriptionInputChange} placeholder="enter description" required />
        </div>
        <button style={{ width: 177, height: 21, alignSelf: 'flex-end' }} onClick={handleCreateToDo}>Create</button>
      </div>
    </div>
  )
}
export default ToDoList;


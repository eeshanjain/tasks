import React, { FC, useState } from 'react'

import { TaskFormPropsType } from '../../types'

const TaskForm: FC<TaskFormPropsType> = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTaskHandler = () => addTask(title, description)
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)

  return (
    <div>
      <input type="text" value={title} onChange={titleChangeHandler} placeholder="Title" />
      <input type="text" value={description} onChange={descriptionChangeHandler} placeholder="Description" />
      <button onClick={addTaskHandler}>Add Task</button>
    </div>
  )
}

export default TaskForm

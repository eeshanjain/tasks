import './taskList.css'

import React, { FC } from 'react'

import { TaskListPropsType } from '../../types'

const TaskList: FC<TaskListPropsType> = ({ tasks, editTask, deleteTask, markAsDone }) => {
  const sortedTasks = tasks.sort((task1, task2) => Number(task1.done) - Number(task2.done))

  const getClassStyle = (done: boolean) => done ? 'task-done' : ''

  return (
    <div>
      {sortedTasks.map(({_id, title, description, done}) => (
        <div key={_id}>
          <h3 className={getClassStyle(done)}>{title}</h3>
          <p className={getClassStyle(done)}>{description}</p>
          <button onClick={() => editTask(_id)}>Edit</button>
          <button onClick={() => deleteTask(_id)}>Delete</button>
          {!done && <button onClick={() => markAsDone(_id)}>Mark As Done</button>}
        </div>
      ))}
    </div>
  )
}

export default TaskList

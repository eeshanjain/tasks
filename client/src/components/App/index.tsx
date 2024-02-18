import * as Api from '../../api'

import React, { useEffect, useState } from 'react'

import { Task } from '../../types'
import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(() => {
    Api.getTasks()
      .then(res => {
        setTasks(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const addTask = (title: string, description: string) => {
    Api.addTask({ description, title })
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  }

  const deleteTask = (taskId: string) => {
    Api.deleteTask(taskId)
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  }

  const markAsDone = (taskId: string) => {
    Api.markTaskAsDone(taskId)
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  }

  const editTask = () => {
    // eslint-disable-next-line no-alert
    alert('Edit task')
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} markAsDone={markAsDone} />
    </div>
  )
}

export default App

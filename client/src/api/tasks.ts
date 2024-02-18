import axios from 'axios'

const instance = axios.create({ baseURL: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}` })

export const getTasks = () => instance.get('/api/tasks')

export const addTask = ({ description, title }) => instance.post('/api/tasks', { description, title })

export const deleteTask = (taskId: string) => instance.delete(`/api/tasks/${taskId}`)

export const markTaskAsDone = (taskId: string) => instance.put(`/api/tasks/${taskId}`)

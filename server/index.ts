import * as Handlers from './handlers'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const { MONGODB_URI, SERVER_PORT: PORT } = process.env

app.use(bodyParser.json())
app.use(cors())

app.get('/api/tasks', Handlers.fetchTasks)

app.post('/api/tasks', Handlers.createTask)

app.delete('/api/tasks/:taskId', Handlers.deleteTask)

app.put('/api/tasks/:taskId', Handlers.markTaskAsDone)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })

export default app

import * as Constants from '../constants'
import { Task } from '../models'
import app from '../../server'
import request from 'supertest'


// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockingoose = require('mockingoose')

const VALID_TASKS = [
  {
    description: 'task 1 description',
    title: 'task 1'
  },
  {
    description: 'task 2 description',
    title: 'task 2'
  }
]

afterEach(() => jest.clearAllMocks())

test('should be able to fetch tasks', async () => {
  mockingoose(Task).toReturn(VALID_TASKS, 'find')

  const res = await request(app).get('/api/tasks')
  const tasks = res.body

  expect(tasks.length).toEqual(VALID_TASKS.length)
  for (let index = 0; index < VALID_TASKS.length; index +=1 ) {
    const { description, title } = tasks[index]
    const { description: validDesc, title: validTitle } = VALID_TASKS[index]

    expect(description).toEqual(validDesc)
    expect(title).toEqual(validTitle)
  }
})

test('should be able to create tasks', async () => {
  mockingoose(Task).toReturn(VALID_TASKS[0], 'save')

  const res = await request(app)
    .post('/api/tasks')
    .send({
      description: VALID_TASKS[0].description,
      title: VALID_TASKS[0].title
    })

  expect(res.status).toEqual(Constants.HTTP_CREATED)
  expect(res.text).toEqual(Constants.TASK_CREATED)
})

test('should not create task if title or description not provided', async () => {
  const res = await request(app)
    .post('/api/tasks')
    .send()

  expect(res.status).toEqual(Constants.HTTP_SERVER_ERROR)
  expect(res.text).toEqual(Constants.SERVER_ERROR_MSG)
})

test('should delete task', async () => {
  mockingoose(Task).toReturn(VALID_TASKS[0], 'findByIdAndDelete')
  const res = await request(app).delete('/api/tasks/123')

  expect(res.status).toEqual(Constants.HTTP_OK)
  expect(res.text).toEqual(Constants.TASK_DELETED)
})

test('should mark task as done', async () => {
  mockingoose(Task).toReturn(VALID_TASKS[0], 'findByIdAndUpdate')
  const res = await request(app).put('/api/tasks/123')

  expect(res.status).toEqual(Constants.HTTP_OK)
  expect(res.text).toEqual(Constants.TASK_MARKED_AS_DONE)
})

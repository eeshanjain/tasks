import * as Constants from '../constants'
import { Request, Response } from 'express'
import { Task } from '../models'

export const fetchTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(Constants.HTTP_SERVER_ERROR).send(Constants.SERVER_ERROR_MSG)
  }
}

export const createTask = async (req: Request, res: Response) => {
  const newTask = new Task({
    description: req.body.description,
    title: req.body.title
  })
  try {
    await newTask.save()
    res.status(Constants.HTTP_CREATED).send(Constants.TASK_CREATED)
  } catch (err) {
    res.status(Constants.HTTP_SERVER_ERROR).send(Constants.SERVER_ERROR_MSG)
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId)
    res.status(Constants.HTTP_OK).send(Constants.TASK_DELETED)
  } catch (err) {
    res.status(Constants.HTTP_SERVER_ERROR).send(Constants.SERVER_ERROR_MSG)
  }
}

export const markTaskAsDone = async (req: Request, res: Response) => {
  try {
    await Task.findByIdAndUpdate(req.params.taskId, { '$set': { done: true } })
    res.status(Constants.HTTP_OK).send(Constants.TASK_MARKED_AS_DONE)
  } catch (err) {
    res.status(Constants.HTTP_SERVER_ERROR).send(Constants.SERVER_ERROR_MSG)
  }
}

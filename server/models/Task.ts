import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  description: { required: true, type: String },
  done: { default: false, required: false, type: Boolean },
  title: { required: true, type: String }
})

export const Task = mongoose.model('Task', taskSchema)

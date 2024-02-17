import { Task } from '../../types'

export type TaskListPropsType = {
    tasks: Task[],
    editTask: (taskId: string) => void,
    deleteTask: (taskId: string) => void,
    markAsDone: (taskId: string) => void,
}

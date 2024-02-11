import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

type TodoId = Pick<Todo, 'id'>
type TodoTitle = Pick<Todo, 'title'>
type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodo = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

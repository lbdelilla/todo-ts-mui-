import { type Todo as TodoType, type TodoId, type ListOfTodo } from '../types'
import { Todo } from './Todo'
import '../index.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

interface TodosProps {
  todos: ListOfTodo
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onCompleteTodo }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.default', borderRadius:'25px'}}>
      {todos.map((todo) => (
        <ListItem key={todo.id} id='tasks' className={`${todo.completed ? 'completed' : ''}`}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo} />
        </ListItem>
      ))}
    </List>
  )
}

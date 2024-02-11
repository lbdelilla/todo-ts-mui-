import React, { useState } from 'react'
import { Todos } from '../components/Todos'
import type { FilterValue, TodoId, TodoTitle, Todo as TodoType } from '../types'
import { Footer } from '../components/Footer'
import { TODO_FILTERS } from '../consts'
import { Header } from '../components/Header'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const mockTodos = [
	{
		id: '1',
		title: 'Make the bed',
		completed: true
	},
	{
		id: '2',
		title: 'Do the dishes',
		completed: false
	},
	{
		id: '',
		title: 'Do the laundry',
		completed: false
	}
]

const Home: React.FC = () => {
	const [todos, setTodos] = useState(mockTodos)
	const [filterSelected, setFilterSelected] = useState('all' as FilterValue)

	const handleRemove = ({ id }: TodoId): void => {
		const newTodos = todos.filter((todo) => todo.id !== id)
		setTodos(newTodos)
	}

	const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed }
			}
			return todo
		})
		setTodos(newTodos)
	}

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter)
	}

	const handleRemoveAllCompleted = (): void => {
		const newTodos = todos.filter((todo) => !todo.completed)
		setTodos(newTodos)
	}

	const filteredTodos = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) {
			return !todo.completed
		}
		if (filterSelected === TODO_FILTERS.COMPLETED) {
			return todo.completed
		}
		return todo
	})

	const handleSave = ({ title }: TodoTitle): void => {
		const newTodo = {
			id: crypto.randomUUID(),
			title,
			completed: false
		}

		setTodos([...todos, newTodo])
	}
	return (
		<Container maxWidth="sm">
			<Typography variant="h2" component="h1" sx={{ mb: 1, paddingTop: '30px', color: 'text.tertiary', fontSize: '36px' }}>This are your Tasks for the day</Typography>
			<Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: '30px', padding: '30px' }}>
				<Header saveTodo={handleSave} />
				<Todos todos={filteredTodos} onRemoveTodo={handleRemove} onCompleteTodo={handleCompleted} />
				<Footer filterSelected={filterSelected} handleFilterChange={handleFilterChange} activeCount={todos.filter((todo) => !todo.completed).length} completedCount={todos.filter((todo) => todo.completed).length} onClearCompleted={handleRemoveAllCompleted} />
			</Box>
		</Container>
	)
}

export default Home

import { useState } from 'react'
import type { TodoTitle } from '../types'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

interface Props {
	saveTodo: ({ title }: TodoTitle) => void
}

const topToDos: TodoTitle[] = [
	{ title: '30 minute meditation' },
	{ title: 'Check my emails' },
	{ title: 'Pick up groceries' },
	{ title: 'Go for a run' },
];



export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		saveTodo({ title: inputValue })
		setInputValue('')
	}

	const defaultProps = {
		options: topToDos,
		getOptionLabel: (option: TodoTitle | string) => {
			if (typeof option === 'string' || !option) {
				return option;
			}
			return option.title;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Autocomplete
				{...defaultProps}
				value={topToDos.find(todo => todo.title === inputValue) || null}
				options={topToDos}
				sx={{ width: 400 }}
				onChange={(e: React.SyntheticEvent, newValue: string | TodoTitle | null) => {
					if (newValue && typeof newValue !== 'string') {
						setInputValue(newValue.title);
						console.log(newValue);
					} else if (typeof newValue === 'string') {
						setInputValue(newValue);
					} else {
						setInputValue('');
					}
				}}
				renderInput={(params) => <TextField {...params} label="Tasks" variant="standard" />}
				autoFocus
				freeSolo
			/>
		</form>
	)
}

import { type TodoId, type Todo as TodoType } from '../types'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoId) => void
	onCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleteTodo }) => {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onCompleteTodo({
			id,
			completed: event.target.checked
		})
	}

	const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (): void => {
		onRemoveTodo({ id })
	}
	// const classes = useStyles()
	return (
		<FormGroup>
			<Box sx={{ display: 'flex'}}>
				<FormControlLabel control={<Checkbox checked={completed} onChange={handleCheckboxChange} />} label={title} sx={{color: 'text.primary'}} />
				<IconButton aria-label="delete" color='error' onClick={handleButtonClick} >
					<DeleteIcon sx={{color:'#ff5252'}}/>
				</IconButton>
			</Box>
		</FormGroup>
	)
}

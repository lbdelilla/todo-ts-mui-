import { Box } from '@mui/system'
import { type FilterValue } from '../types'
import { Filters } from './Filters'
import { Button, Divider } from '@mui/material'
import Typography from '@mui/material/Typography';

interface Props {
	handleFilterChange: (filter: FilterValue) => void
	activeCount: number
	completedCount: number
	onClearCompleted: () => void
	filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, onClearCompleted, filterSelected, handleFilterChange }) => {

	let countMessage = '';

	if (activeCount >= 2) {
		countMessage = ' tasks left to finish the day!';
	} else if (activeCount === 1) {
		countMessage = ' task left to finish the day!';
	}

	return (
		<Box >
			<Typography variant='caption' sx={{ color: 'grey' }}>
				<strong>{activeCount}</strong>
				{
					countMessage
				}
			</Typography>
			<Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
			<Divider />
			{completedCount > 0 && (
				<Box sx={{ mt: '20px', display: 'flex', justifyContent: 'flex-end' }}>
					<Button variant='contained' size='small' sx={{ bgcolor: '#F84B4B' }} onClick={onClearCompleted}>
						Clear completed
					</Button>
				</Box>)
			}
		</Box>
	)
}

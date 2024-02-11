import { Box } from '@mui/system'
import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'
import { Button, Link } from '@mui/material'


interface Props {
  handleFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    handleFilterChange(filter)
  }
  return (
    <Box sx={{m: '20px' ,display: 'flex', justifyContent: 'center', gap: '20px'}}>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''

          return (
            <Button key={key} size="small" variant="outlined">
              <Link className={className} href={href} underline="none" onClick={handleClick(key as FilterValue)  }> {literal} </Link>
            </Button>
          )
        })
      }
    </Box>
  )
}

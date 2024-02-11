import { createTheme } from '@mui/material/styles'


// A custom theme for this app
const fixedTheme = createTheme({
	typography: {
		fontFamily: 'Protest Riot, sans-serif',
    h2: {
      fontSize: 36,
			fontWeight: 500,
			margin: '10px'
    },
		h1: {
			fontSize: 48,
			fontWeight: 500,
			margin: '10px',
		}
	}
})

export default fixedTheme


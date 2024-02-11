import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './pages/Home';
import { amber, deepOrange, deepPurple, grey, teal } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: deepPurple,
          divider: '#00695c',
          text: {
            primary: grey[900],
            secondary: grey[800],
						tertiary: '#00695c'
          },
					background: {
            default: '#edf7f7',
            paper: '#edf7f7',
          },
        }
      : {
          // palette values for dark mode
          primary: teal,
          divider: '#4c9d95',
          background: {
            default: '#121212',
            paper: '#121212',
          },
          text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
						tertiary: '#80cbc4'
          },
        }),
  },
	typography: {
    fontFamily: "Protest Riot, sans-serif",
	}
});


function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
				<Box sx={{ display: 'flex', flexDirection: 'column', bgcolor:'background.paper', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
        <App />
				<Home /> 
				</Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
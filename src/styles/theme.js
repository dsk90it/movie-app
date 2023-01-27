import { createTheme } from '@mui/material/styles'

const dark = createTheme({
  palette: {
    background: {
      default: '#273244',
    },
    text: {
      primary: '#D4D7DD',
    },
    primary: {
      main: '#00E0FF',
    },
    secondary: {
      main: '#1F2A3C',
      light: '#394B61',
      dark: '#283647',
    },
    divider: '#394B61',
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
    fontWeightMedium: 600,
    button: {
      fontSize: '1rem',
    },
  },
})

export { dark }

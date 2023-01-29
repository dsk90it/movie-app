import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { dark } from '../../styles/theme'
import Sidebar from '../composites/SideBar'
import { AppBar, Box } from '@mui/material'

function DefaultLayout({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Sidebar
          avatarImg={'https://mui.com/static/images/avatar/1.jpg'}
          userName="Eric Hoffman"
          onLogout={() => alert('Logout Clicked!')}
        />

        <Box component={'main'} sx={{ width: '100%' }}>
          <AppBar position="sticky">lorem</AppBar>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default DefaultLayout

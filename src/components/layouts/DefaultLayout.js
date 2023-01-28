import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { dark } from '../../styles/theme'
import Sidebar from '../composites/SideBar'

function DefaultLayout({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />

      <Sidebar
        avatarImg={'https://mui.com/static/images/avatar/1.jpg'}
        userName="Eric Hoffman"
        onLogout={() => alert('Logout Clicked!')}
      />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default DefaultLayout

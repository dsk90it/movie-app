import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { dark } from '../../styles/theme'
import Sidebar from '../composites/SideBar/SideBar'

function DefaultLayout({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />

      <Sidebar />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default DefaultLayout

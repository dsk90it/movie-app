import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline'

import { dark } from '../../styles/theme'
import BaseAvatar from '../base/BaseAvatar'

function DefaultLayout({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />

      <Box component="aside" sx={{ p: 5 }}>
        <BaseAvatar />
      </Box>

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default DefaultLayout

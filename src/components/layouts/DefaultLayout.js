import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { dark } from '../../styles/theme'
import BaseHeader from '../base/BaseHeader'
import Sidebar from '../composites/SideBar'

const MainWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: '24px',

  [theme.breakpoints.up('lg')]: {
    padding: '42px 48px',
  },
}))

function DefaultLayout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const hideMenu = () => setMenuOpen(false)
  const showMenu = () => setMenuOpen(true)

  return (
    <ThemeProvider theme={dark}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Sidebar
          avatarImg={'https://mui.com/static/images/avatar/1.jpg'}
          userName="Eric Hoffman"
          onLogout={() => alert('Logout Clicked!')}
          closeMenu={hideMenu}
          isMenuOpen={isMenuOpen}
        />

        <MainWrapper component={'main'}>
          <BaseHeader openMenu={showMenu} />
          {children}
        </MainWrapper>
      </Box>
    </ThemeProvider>
  )
}

export default DefaultLayout

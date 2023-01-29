import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'

const AppHeader = styled(AppBar)(({ theme }) => ({
  margin: '-24px -24px 0 -24px',
  width: 'auto',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    backgroundColor: 'red',
  },
}))

function BaseHeader({ openMenu }) {
  return (
    <AppHeader position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openMenu}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          BaseHeader
        </Typography>
      </Toolbar>
    </AppHeader>
  )
}

export default BaseHeader

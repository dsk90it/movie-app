import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { styled } from '@mui/material/styles'

const AppHeader = styled(AppBar)(({ theme }) => ({
  margin: '-24px -24px 0 -24px',
  width: 'auto',
  flexDirection: 'row',
  boxShadow: 'none',
  backgroundColor: theme.palette.background.default,
  color: 'inherit',
  minHeight: '64px',

  [theme.breakpoints.up('lg')]: {
    backgrounColor: 'red',
    margin: '-42px -48px 0 -48px',
    padding: '24px 24px 0',
    minHeight: 'auto',
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

        <div>
          <IconButton color="inherit">
            <SearchOutlinedIcon />
          </IconButton>
          <input />
        </div>
      </Toolbar>

      <Toolbar sx={{ ml: 'auto' }}>
        <IconButton color="inherit">
          <LightModeOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreVertOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppHeader>
  )
}

export default BaseHeader

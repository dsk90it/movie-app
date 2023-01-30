import { useState, useRef } from 'react'
import { AppBar, IconButton, Toolbar, InputBase, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloseIcon from '@mui/icons-material/Close'
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
    margin: '-42px -48px 0 -48px',
    padding: '32px 24px 16px',
    minHeight: 'auto',
  },
}))

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'transparent',
  transition: 'all 0.3s',
  borderRadius: '8px',
  width: '40px',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    left: '44px',
    top: '12px',
    zIndex: '1',
  },
  [theme.breakpoints.up('lg')]: {
    height: '56px',
  },

  // expand state
  '&.is-expanded': {
    backgroundColor: theme.palette.secondary.dark,

    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 60px)',
    },
    [theme.breakpoints.up('sm')]: {
      width: '375px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '564px',
    },
  },
}))

function BaseHeader({ openMenu }) {
  const [isSearchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef()

  const openSearch = () => {
    setSearchOpen(true)
    searchRef.current.focus()
    console.log(searchRef)
  }
  const closeSearch = () => {
    setSearchOpen(false)
    searchRef.current.blur()
    searchRef.current.value = ''
  }

  return (
    <AppHeader position="sticky">
      <Toolbar sx={{ position: { xs: 'unset', md: 'relative' } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openMenu}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* search-bar starts */}
        <SearchWrapper elevation={0} className={isSearchOpen && 'is-expanded'}>
          <IconButton
            aria-label="open search"
            color="inherit"
            sx={{ pointerEvents: isSearchOpen && 'none' }}
            onClick={openSearch}
            disableRipple="true"
          >
            <SearchOutlinedIcon />
          </IconButton>
          <InputBase
            inputProps={{ 'aria-label': 'search movies' }}
            inputRef={searchRef}
            placeholder="Title, Movies, Keyword"
            sx={{ mx: '1', flex: 1 }}
          />
          <IconButton
            aria-label="close search"
            color="inherit"
            sx={{ opacity: isSearchOpen ? '1' : '0' }}
            onClick={closeSearch}
            disableRipple="true"
          >
            <CloseIcon />
          </IconButton>
        </SearchWrapper>
        {/* search-bar ends */}
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

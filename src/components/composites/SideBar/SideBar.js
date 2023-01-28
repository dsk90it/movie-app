import { Box, Drawer, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'

import BaseAvatar from '../../base/BaseAvatar'
import SideBarMenus from './SideBarMenus'
import Menus from '../../../static/data/menus'

const drawerWidth = '275px'

const AppDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,

  '.MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'none',
    borderRightColor: theme.palette.secondary.main,
    padding: '42px 0',
  },

  '&& ::-webkit-scrollbar': {
    width: '8px',
  },
  '&& ::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '&& ::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: theme.palette.divider,
  },
}))

function BaseSidebar() {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppDrawer
      component="aside"
      variant={isMdUp ? 'permanent' : 'temporary'}
      anchor="left"
      open={true}
    >
      {/* Avatar */}
      <Box
        component={'section'}
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={3}
        mb={2.5}
      >
        <BaseAvatar name={'Eric Hoffman'} />
        <Typography mt={1.5} variant="h6">
          Eric Hoffman
        </Typography>
      </Box>

      {/* Menus */}
      <SideBarMenus lists={Menus} />
    </AppDrawer>
  )
}

export default BaseSidebar

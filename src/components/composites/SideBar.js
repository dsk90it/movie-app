import { Box, Drawer, Typography, List } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import BaseAvatar from '../base/BaseAvatar'
import BaseMenuItem from '../base/BaseMenuItem'
import Menus from '../../static/data/menus'

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

const MenuWrapper = styled(List)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: '16px 0',
}))

function BaseSidebar({ avatarImg, userName, onLogout }) {
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
        <BaseAvatar imgurl={avatarImg} name={userName} />
        <Typography mt={1.5} variant="h6">
          {userName}
        </Typography>
      </Box>

      {/* Menus */}
      {Menus.map((list) => (
        <MenuWrapper key={list.id}>
          {list.items.map((item) => (
            <BaseMenuItem
              key={item.id}
              icon={item.icon}
              text={item.text}
              link={item.slug}
              isSelected={item.active} // Todo: Route handling active state
            />
          ))}
        </MenuWrapper>
      ))}

      {/* Account Settings */}
      <MenuWrapper>
        <BaseMenuItem
          icon={<SettingsOutlinedIcon />}
          text={'Settings'}
          link="#"
          isSelected={false} // Todo: Route handling active state
        />
        <BaseMenuItem
          icon={<LogoutOutlinedIcon />}
          text={'Logout'}
          handleClick={onLogout}
        />
      </MenuWrapper>
    </AppDrawer>
  )
}

export default BaseSidebar

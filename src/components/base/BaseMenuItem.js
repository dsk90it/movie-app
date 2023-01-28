import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const MenuItem = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: '32px',
  paddingRight: '32px',
  color: theme.palette.text.primary,
  borderRight: '3px solid transparent',
  margin: '2px 0',

  '.MuiListItemIcon-root': {
    minWidth: '42px',
    color: theme.palette.text.primary,
  },

  // hover state
  '&.MuiListItemButton-root:hover, &.Mui-selected': {
    backgroundColor: 'transparent',

    '&, & .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },

  // selected state
  '&.Mui-selected': {
    borderRightColor: theme.palette.primary.main,
  },
}))

function BaseMenuItem({ icon, text, link, isSelected }) {
  return (
    <ListItem disablePadding>
      <MenuItem component="a" href={link} selected={isSelected}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          primary={text}
          sx={{ my: '0', fontWeight: 'fontWeightMedium' }}
          disableTypography
        />
      </MenuItem>
    </ListItem>
  )
}

BaseMenuItem.defaultProps = {
  text: `Menu Item`,
  link: '#',
  isSelected: false,
  icon: null,
}

export default BaseMenuItem

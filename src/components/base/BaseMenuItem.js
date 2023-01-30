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
  fontSize: '1rem',
  lineHeight: '1.5',
  fontFamily: theme.typography.fontFamily,

  '.MuiListItemIcon-root': {
    minWidth: '42px',
    color: theme.palette.text.primary,
  },

  // selected state
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    borderRightColor: theme.palette.primary.main,

    '&, & .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}))

function BaseMenuItem({ icon, text, link, isSelected, handleClick }) {
  return (
    <ListItem disablePadding>
      <MenuItem
        component={link ? 'a' : 'button'}
        href={link}
        selected={isSelected}
        onClick={handleClick}
      >
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
  isSelected: false,
  href: null,
}

export default BaseMenuItem

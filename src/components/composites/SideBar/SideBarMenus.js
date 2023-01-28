import { List } from '@mui/material'
import { styled } from '@mui/material/styles'
import BaseMenuItem from '../../base/BaseMenuItem'

const MenuWrapper = styled(List)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: '16px 0',
}))

function SideBarMenus({ lists }) {
  return lists.map((list) => (
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
  ))
}

export default SideBarMenus

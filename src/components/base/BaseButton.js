import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const AppButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  borderRadius: '0.3125rem',
  boxShadow: 'none',
  textTransform: 'unset',

  '&.MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
  },

  '&:hover': {
    boxShadow: 'none',
  },
}))

function BaseButton(props) {
  return <AppButton {...props}>{props.children}</AppButton>
}

BaseButton.defaultProps = {
  children: 'Button',
}

export default BaseButton

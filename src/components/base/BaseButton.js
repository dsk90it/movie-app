import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const AppButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  borderRadius: '0.3125rem',
  boxShadow: 'none',
  textTransform: 'unset',
  fontWeight: '700',

  '&.MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
  },

  '&.MuiButton-containedPrimary:hover': {
    backgroundColor: theme.palette.primary.main,
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

import { Stack, Slider, Typography } from '@mui/material'
import { common } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const RatingSlider = styled(Slider)(({ theme }) => ({
  borderRadius: '16px',
  height: '8px',
  cursor: 'default',

  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.secondary.medium,
    opacity: '1',
  },

  '& .MuiSlider-track': {
    border: 'none',
  },

  '& .MuiSlider-thumb': {
    display: 'none',
  },
}))

function BaseRating(props) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="center">
      <RatingSlider
        aria-label="IMDB Rating"
        max={props.max}
        value={props.value}
        {...props}
      />
      <Typography sx={{ color: common.white, fontWeight: 'fontWeightMedium' }}>
        {props.value}/{props.max}
      </Typography>
    </Stack>
  )
}

BaseRating.defaultProps = {
  value: 0,
  max: 10,
}

export default BaseRating

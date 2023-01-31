import Slider from '@mui/material/Slider'

function BaseRating(props) {
  return <Slider sx={{ '.MuiSlider-thumb': { display: 'none' } }} {...props} />
}

export default BaseRating

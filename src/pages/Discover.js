import { Box } from '@mui/material'
import BaseRating from '../components/base/BaseRating'

function Discover() {
  return (
    <Box sx={{ maxWidth: 200 }}>
      <BaseRating value={8.3} />
    </Box>
  )
}

export default Discover

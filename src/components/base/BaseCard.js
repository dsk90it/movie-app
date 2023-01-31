import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const MovieCard = styled(Card)(({ theme }) => ({
  padding: '9px',
  borderRadius: '11px',
  boxShadow: 'none',
  backgroundColor: theme.palette.secondary.light,
  cursor: 'pointer',
  userSelect: 'none',
  border: '3px solid transparent',

  '&.selected': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.35)',
  },

  '& .MuiCardMedia-img': {
    borderRadius: '8px',
    objectPosition: 'top center',
  },

  '& .MuiCardActions-root': {
    padding: '0',
    marginLeft: '-6px',
  },
}))

const FallbackImage = styled(Box)(({ theme }) => ({
  display: 'block',
  height: '190px',
  backgroundColor: theme.palette.secondary.medium,
  borderRadius: '8px',
}))

function BaseCard({ imgUrl, title, handlePlay, handlePlayList, isActive }) {
  return (
    <MovieCard className={isActive && 'selected'}>
      {imgUrl ? (
        <CardMedia component="img" image={imgUrl} alt={title} height={190} />
      ) : (
        <FallbackImage />
      )}

      <Typography sx={{ pt: '12px' }} fontWeight="fontWeightMedium">
        {title}
      </Typography>

      <CardActions disableSpacing>
        <IconButton aria-label="play" color="inherit" onClick={handlePlay}>
          <PlayCircleOutlineIcon />
        </IconButton>
        <IconButton
          aria-label="add to playlist"
          color="inherit"
          sx={{ ml: '-4px' }}
          onClick={handlePlayList}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </CardActions>
    </MovieCard>
  )
}

export default BaseCard

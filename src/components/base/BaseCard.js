import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Skeleton,
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

  '& .MuiCardMedia-root': {
    borderRadius: '8px',
    objectPosition: 'top center',
  },

  '& .MuiCardActions-root': {
    padding: '0',
    marginLeft: '-6px',
  },
}))

function BaseCard({ imgUrl, title, handlePlay, handlePlayList, isActive }) {
  return (
    <MovieCard className={isActive && 'selected'}>
      {imgUrl ? (
        <CardMedia image={imgUrl} alt={title} sx={{ pb: '118%' }} />
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ borderRadius: '8px', pb: '118%' }}
        />
      )}

      <Typography sx={{ pt: '12px' }} fontWeight="fontWeightMedium" noWrap>
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

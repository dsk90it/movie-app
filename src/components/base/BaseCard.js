import {
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
    borderColor: '#00E0FF',
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

function BaseCard({ imgUrl, title }) {
  return (
    <MovieCard className="selected">
      <CardMedia
        component="img"
        image="https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg"
        alt={title}
        height={190}
      />

      <Typography sx={{ pt: '12px' }} fontWeight={'fontWeightMedium'} noWrap>
        Free Guy Free Guy Free Guy Free Guy
      </Typography>

      <CardActions disableSpacing>
        <IconButton
          aria-label="play"
          color="inherit"
          onClick={() => alert('PlayIcon Clicked!')}
        >
          <PlayCircleOutlineIcon />
        </IconButton>
        <IconButton
          aria-label="add to playlist"
          color="inherit"
          sx={{ ml: '-4px' }}
          onClick={() => alert('PlayListIcon Clicked!')}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </CardActions>
    </MovieCard>
  )
}

export default BaseCard

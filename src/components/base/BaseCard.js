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
  padding: '12px',
  borderRadius: '11px',
  boxShadow: 'none',
  backgroundColor: theme.palette.secondary.light,
  cursor: 'pointer',
  userSelect: 'none',

  '&:selected': {
    outline: '2px solid blue',
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
    <MovieCard>
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

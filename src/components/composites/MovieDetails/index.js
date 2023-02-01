import { Box, Typography, ListItem } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

import {
  DetailsWrapper,
  MoviePoster,
  FallbackImage,
  CastList,
  CardFooter,
  XsCloseIcon,
} from './styles'
import BaseRating from '../../base/BaseRating'
import BaseButton from '../../base/BaseButton'

function MovieDetails({ movie, playMovie, playTrailer, closePopup }) {
  const castData = [
    { label: 'Year', value: movie.Year },
    { label: 'Running Time', value: movie.Runtime },
    { label: 'Directed by', value: movie.Director },
    { label: 'language', value: movie.Language },
  ]

  return (
    <DetailsWrapper direction="row">
      {/* xs close icon */}
      <XsCloseIcon
        aria-label="close menu"
        sx={{ display: { xs: 'block', lg: 'none' } }}
        onClick={closePopup}
      >
        <CancelIcon />
      </XsCloseIcon>

      {movie.Poster ? <MoviePoster image={movie.Poster} /> : <FallbackImage />}

      <Box sx={{ width: { xs: '100%', md: '70%' }, py: 3, px: { md: 4 } }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'fontWeightMedium' }}>
          {movie.Title}
        </Typography>

        <Box sx={{ display: 'block', maxWidth: 160 }}>
          <BaseRating value={parseFloat(movie.imdbRating)} />
        </Box>

        <Box sx={{ display: 'block', width: '100%' }}>
          <CastList>
            {castData.map((item, index) => {
              return (
                <ListItem key={index}>
                  <span>{item.label}</span> {item.value}
                </ListItem>
              )
            })}
          </CastList>
        </Box>

        <Typography sx={{ fontSize: '14px', mb: 3 }}>{movie.Plot}</Typography>

        <CardFooter>
          <BaseButton variant="contained" onClick={playMovie}>
            Play Movie
          </BaseButton>
          <BaseButton variant="outlined" onClick={playTrailer}>
            Watch Trailer
          </BaseButton>
        </CardFooter>
      </Box>
    </DetailsWrapper>
  )
}

export default MovieDetails

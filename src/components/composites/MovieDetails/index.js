import { Box, Typography, ListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CancelIcon from '@mui/icons-material/Cancel'
import { motion, AnimatePresence } from 'framer-motion'

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
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const castData = [
    { label: 'Year', value: movie.Year },
    { label: 'Running Time', value: movie.Runtime },
    { label: 'Directed by', value: movie.Director },
    { label: 'language', value: movie.Language },
  ]

  // Animations
  const scaleY = {
    hidden: {
      scaleY: 0,
    },
    show: {
      scaleY: 1,
      transition: {
        duration: 0.4,
      },
    },
  }
  const fade = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  }

  return (
    <AnimatePresence>
      <DetailsWrapper
        direction="row"
        component={motion.div}
        variants={!isSmall ? scaleY : fade}
        animate="show"
        initial="hidden"
      >
        {/* xs close icon */}
        <XsCloseIcon
          aria-label="close menu"
          sx={{ display: { xs: 'block', lg: 'none' } }}
          onClick={closePopup}
        >
          <CancelIcon />
        </XsCloseIcon>

        {movie.Poster ? (
          <MoviePoster
            image={movie.Poster}
            component={motion.div}
            variants={fade}
            animate="show"
            initial="hidden"
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        ) : (
          <FallbackImage
            variant="rectangular"
            component={motion.div}
            variants={fade}
            animate="show"
            initial="hidden"
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        )}

        <Box sx={{ width: { xs: '100%', md: '70%' }, py: 3, px: { md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Typography
              sx={{ fontSize: '30px', fontWeight: 'fontWeightMedium' }}
            >
              {movie.Title}
            </Typography>

            {movie.imdbRating !== 'N/A' ? (
              <Box sx={{ display: 'block', maxWidth: 160 }}>
                <BaseRating value={parseFloat(movie.imdbRating)} />
              </Box>
            ) : null}

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

            <Typography sx={{ fontSize: '14px', mb: 3 }}>
              {movie.Plot}
            </Typography>

            <CardFooter>
              <BaseButton variant="contained" onClick={playMovie}>
                Play Movie
              </BaseButton>
              <BaseButton variant="outlined" onClick={playTrailer}>
                Watch Trailer
              </BaseButton>
            </CardFooter>
          </motion.div>
        </Box>
      </DetailsWrapper>
    </AnimatePresence>
  )
}

export default MovieDetails

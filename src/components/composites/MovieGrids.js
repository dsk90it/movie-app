import { useState } from 'react'
import { Box, Grid } from '@mui/material'
import BaseCard from '../base/BaseCard'
import MovieDetails from '../composites/MovieDetails'

export default function MovieGrids({ movies }) {
  const [currentMovie, setCurrentMovie] = useState({
    Title: null,
  })
  const [clickCount, setClickCount] = useState(0)

  const showModal = (m) => {
    setClickCount(clickCount + 1)
    setCurrentMovie(m)
    window.scrollTo(0, 0)
  }

  const closeModal = () => {
    setClickCount(0)
    setCurrentMovie({})
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {clickCount > 0 ? (
        <MovieDetails
          key={clickCount}
          movie={currentMovie}
          closePopup={closeModal}
        />
      ) : null}

      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid key={index} item xs={6} sm={3} lg={2.4}>
            <BaseCard
              imgUrl={movie.Poster}
              title={movie.Title}
              handleClick={() => showModal(movie)}
              isActive={movie.Title === currentMovie.Title ? true : false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

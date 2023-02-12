import { useState } from 'react'
import { Box, Grid } from '@mui/material'
import BaseCard from '../base/BaseCard'
import MovieDetails from '../composites/MovieDetails'

export default function MovieGrids({ movies }) {
  const [isModal, setModal] = useState({
    Title: null,
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isModal.Title && (
        <MovieDetails movie={isModal} closePopup={() => setModal({})} />
      )}

      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid key={index} item xs={12} sm={3} lg={2.4}>
            <BaseCard
              imgUrl={movie.Poster}
              title={movie.Title}
              handleClick={() => setModal(movie)}
              isActive={movie.Title === isModal.Title ? true : false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

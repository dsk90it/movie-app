import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import BaseCard from '../base/BaseCard'

export default function MovieGrids({ movies }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={4} md={3} lg={2.4}>
            <BaseCard key={index} imgUrl={movie.Poster} title={movie.Title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

import { Grid } from '@mui/material'

function MovieGrids() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        xs=6 md=8
      </Grid>
      <Grid item xs={6} md={4}>
        xs=6 md=8
      </Grid>
      <Grid item xs={6} md={4}>
        xs=6 md=8
      </Grid>
      <Grid item xs={6} md={8}>
        xs=6 md=8
      </Grid>
    </Grid>
  )
}

export default MovieGrids

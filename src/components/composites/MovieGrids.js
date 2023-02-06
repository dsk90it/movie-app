import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function MovieGrids() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {Array.from(Array(16)).map((_, index) => (
          <>
            {index && !(index % 5) ? (
              <Grid item xs={12}>
                <Item>Full Width Row : {index}</Item>
              </Grid>
            ) : (
              <Grid item xs={12} sm={4} md={3} lg={2.4}>
                <Item>{index + 1}</Item>
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </Box>
  )
}

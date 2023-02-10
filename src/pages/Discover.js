import { useState } from 'react'
import { Typography } from '@mui/material'
import DefaultLayout from '../components/layouts/DefaultLayout'
import MovieGrids from '../components/composites/MovieGrids'
import AllMovies from '../static/data.json'

function Discover() {
  const [data, setData] = useState(AllMovies)

  // Search
  const searchMovies = (e) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = AllMovies.filter((movie) => {
        return movie.Title.toLowerCase().startsWith(keyword.toLowerCase())
      })
      setData(results)
    } else {
      setData(AllMovies)
    }
  }

  return (
    <DefaultLayout handleSearch={searchMovies}>
      {data && data.length > 0 ? (
        <MovieGrids movies={data} />
      ) : (
        <Typography
          variant="h6"
          fontWeight="fontWeightMedium"
          color="common.white"
          sx={{ my: 3 }}
        >
          No results found for your search.
        </Typography>
      )}
    </DefaultLayout>
  )
}

export default Discover

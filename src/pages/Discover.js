import MovieGrids from '../components/composites/MovieGrids'
import AllMovies from '../static/data.json'

function Discover() {
  return <MovieGrids movies={AllMovies} />
}

export default Discover

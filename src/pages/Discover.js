import MovieDetails from '../components/composites/MovieDetails'
import AllMovies from '../static/data.json'

function Discover() {
  return <MovieDetails movie={AllMovies[0]} />
}

export default Discover

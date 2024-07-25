import Movie from "./Movie";

function MovieList({ movies, onSelectmovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectmovie={onSelectmovie} />
      ))}
    </ul>
  );
}

export default MovieList;

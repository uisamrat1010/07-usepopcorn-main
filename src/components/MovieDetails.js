import React, { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";
import useKey from "../custom_hooks/useKey";

const Key = "5d26be74";

function MovieDetails({ selectedid, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [userRating, setuserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) {
        countRef.current++;
      }
    },
    [userRating]
  );

  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Actors: actors,
    Director: director,
    Genre: genre,
    Released: released,
  } = movie;

  //console.log(title, released);

  function handleAdd() {
    const newMovie = {
      imdbID: selectedid,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newMovie);
    onCloseMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedid);

  const userIDrating = watched.find(
    (movie) => movie.imdbID === selectedid
  )?.userRating;
  //console.log(isWatched);
  //console.log(selectedid);
  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${Key}&i=${selectedid}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }
      getMovieDetails();
    },
    [selectedid]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up of ${title}`);
      };
    },
    [title]
  );

  useKey("Escape", onCloseMovie);

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{released}</p>
              <p>⌛{runtime}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb Rating
              </p>
              <p>{year}</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onsetRating={setuserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to Watchlist
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have rated this movie {userIDrating}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directors: {director}</p>
            <p>Genre: {genre}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;

import React from "react";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched, ondeleteMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          ondeleteMovie={ondeleteMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedList;

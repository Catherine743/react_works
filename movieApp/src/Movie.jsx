import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function MovieSearch() {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "fd5b686"; // replace with your OMDB API key

  const getMovie = async () => {
    if (!movie.trim()) {
      setError("Please enter a movie title");
      setMovieData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMovieData(null);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`
      );

      const data = await res.json();

      if (data.Response === "False") {
        setError("Movie not found");
        setLoading(false);
        return;
      }

      setMovieData(data);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="w-25 mx-auto mt-5 text-center pb-5">
      {/* Search Bar */}
      <div className="d-flex justify-content-center gap-3">
        <input
          type="text"
          placeholder="Enter movie title"
          className="form-control w-full"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <Button variant="primary" onClick={getMovie}>
          Search
        </Button>
      </div>

      {/* Loading */}
      {loading && <p className="mt-3">Loading...</p>}

      {/* Error */}
      {error && <p className="text-warning mt-3">{error}</p>}

      {/* Movie Result */}
      {movieData && (
        <div className="card my-4 p-4 shadow">
          <h3>{movieData.Title}</h3>
          <p><strong>Year:</strong> {movieData.Year}</p>
          <p><strong>Genre:</strong> {movieData.Genre}</p>

          {movieData.Poster !== "N/A" && (
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              className="img-fluid mt-3"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;


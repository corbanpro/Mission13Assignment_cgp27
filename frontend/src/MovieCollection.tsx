import { useEffect, useState } from 'react';
import { Movie } from './types/movie';

function MovieCollection() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/home');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <div>
      <br />
      <h1>Movie Collection Page</h1>
      <div className="p-4">
        <table className="table">
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>
                <td>{m.movieId}</td>
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{Math.floor(m.year)}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieCollection;

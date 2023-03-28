import data from './MovieData.json';

function MovieCollection() {
  const movieList = data.MovieData;
  return (
    <div>
      <h1>Movie Collection Page</h1>

      <table className="table m-3">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((m) => (
            <tr>
              <td>{m.Category}</td>
              <td>{m.Title}</td>
              <td>{Math.round(m.Year)}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieCollection;

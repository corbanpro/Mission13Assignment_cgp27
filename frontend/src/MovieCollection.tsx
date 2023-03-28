import data from './MovieData.json';

function MovieCollection() {
  const movieList = data.MovieData;
  return (
    <div>
      <br />
      <h1>Movie Collection Page</h1>
      <div className="p-4">
        <table className="table">
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
                <td>{Math.floor(m.Year)}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieCollection;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission13Assignment_cgp27.Data;

namespace Mission13Assignment_cgp27.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private JoelHiltonMovieCollectionContext context;

        public HomeController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            List<Movie> movies = new List<Movie>();
            movies = context.Movies.Where(x => x.Edited.Equals("Yes")).OrderBy(x => x.Title).ToList();

            return movies;
        }
    }
}

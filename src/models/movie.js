import searchMovies from "../repositories/movies";


class MovieModel {

    async getMoviesWithTitle(title) {
        return searchMovies(title)
    }
}

export default MovieModel
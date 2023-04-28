
import React, { useState } from "react"
import MovieModel from "../../../models/movie"
import "./moviesPage.css";
import MovieCard from "../../widgets/movieCard/movieCard";
import SearchIcon from "./search.svg";

const movieModel = new MovieModel()


const MoviesPage = () => {
    const [moviesList, setMoviesList] = useState([])
    const [searchTitle, setSearchTitle] = useState("")

    function searchBarOnChange(event) {
        setSearchTitle(event.target.value)
        if (event.key === "Enter") {
            searchMovies(event.target.value)
        }
    }

    function searchBarOnKeyDown(event) {
        if (event.key === "Enter") {
            searchMovies(event.target.value)
        }
    }

    function searchMovies(title) {
        movieModel.getMoviesWithTitle(title).then((movies) => {
            if (movies.Search)
                setMoviesList(movies.Search)
            else
                setMoviesList([])
        })
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" id="search-bar" placeholder="Search..." onKeyDown={searchBarOnKeyDown} onChange={searchBarOnChange}></input>
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTitle)}
                />
            </div>

            {moviesList?.length > 0 ? (
                <div className="container">
                    {moviesList.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
}

export default MoviesPage

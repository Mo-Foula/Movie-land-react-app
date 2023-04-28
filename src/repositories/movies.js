const apiKey = process.env.REACT_APP_moviesAPIKey
const apiURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`

async function searchMovies(title){
    const response = await fetch(`${apiURL}&s=${title}`)
    const data = await response.json()
    return data
}

export default searchMovies
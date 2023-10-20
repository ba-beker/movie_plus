import { useState, useEffect } from "react";
import './MovieApp.css'
import MovieCard from './MovieCard'
import searchIcon from './search.svg'
function MovieApp(){
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const API_URL = 'https://omdbapi.com?apikey=YOUR_KEY'
const searchMovie = async(title)=>{

    const response = await fetch(`${API_URL}&s=${title}`)
    console.log(response)
    const data = await response.json()
    if (!data.Search){
        console.log('not found')
        setMovies([])
    }
    setMovies(data.Search)
}

    useEffect(()=>{
        searchMovie('Spiderman')
    }, [])
    return (
        <div className="app">
            <h1>Movie<strong>+</strong></h1>
            <div className="search">
            <input placeholder="search for a movie" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
            <img src={searchIcon} alt="search" onClick={()=>searchMovie(searchTerm)}/>
            </div>
            {
                movies?.length > 0 ? (<div className="container">
                {
                    movies.map((movie) =>(<MovieCard movie={movie}/>))
                }
            </div>) :(
                <div className="empty">
                    <p2>No movies found</p2>
                </div>
            )
            }
        </div>
    )
}
export default MovieApp
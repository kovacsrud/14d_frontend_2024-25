import { useState,useEffect } from "react"

function MovieList() {

    const[movies,setMovies]=useState({});
    useEffect(()=>{
        fetch('https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false',{
            method:'GET',
            headers: {
                'x-rapidapi-key': '65a706a6e3msh501db64947c058ap1025b0jsn331650856cfe',
                'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
            }
        })
        .then(res=>res.json())
        .then(adat=>setMovies(adat))
        .catch(err=>alert(err));
    },[])

  return (
    <div>
         <h2 className="text-center">Filmek</h2>
         <p>{movies.status_message}</p>
         {
            movies.data.movies.map((movie)=>(<p key={movie.id}>{movie.title_long}</p>))
         }
    </div>
  )
}

export default MovieList
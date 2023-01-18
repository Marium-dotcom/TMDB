import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {

    let {movieID} = useParams()

    const [movieInfo, setmovieInfo] = useState([''])
    const [genre, setgenre] = useState([''])


    async function getmovgenre(){
        let gen =  await axios.get("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=32cb6faf9cc08a926e2d720cf5bf75ea", genre)
        console.log(gen.data.genres)
        setgenre(gen.data.genres)
    }

    
    



    async function getMovieDetails(movieID)
    
    {
  let {data} = await axios.get("https://api.themoviedb.org/3/movie/"+movieID+"?api_key=32cb6faf9cc08a926e2d720cf5bf75ea", movieInfo)
  setmovieInfo(data)
}

useEffect(() => {
  getMovieDetails(movieID)
  getmovgenre()
}, [])


    
    return (
        <div className="main-container ">

            <div className="mini-container">
            <div className="d-flex justify-content-center">

    <img className="img" src= {`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt="movie poster"></img>
    
    <div>
    <div className="text-white">{movieInfo.title}</div>
    <p className="text-white">Rating: {movieInfo.vote_average}</p>
    <p className="text-white">Vote Counts: {movieInfo.vote_count}</p>
    <h4 >overview: <em className="text-white"> {movieInfo.overview} </em> </h4>

    <p > <h5>Genres:</h5>
        {
            genre.map((e,i)=> {
                return (
                    <p className="text-white"> {e.name}  </p>

                )
            })
        }
    </p>



    <p>
    
    
    
    </p>
    


    {
        
        
    
    }
            </div>
            </div></div>
            </div>
  )
}

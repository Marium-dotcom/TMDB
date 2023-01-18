import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TVDetails.css'

export default function TVDetails() {

  let {TVID} = useParams()

    const [tvDetails, settvDetails] = useState([''])
    const [lastEp, setlastEp] = useState([''])
    const [Genres, setGenres] = useState([''])


    async function getLastEp(){
      let {data} = await axios.get("https://api.themoviedb.org/3/tv/"+TVID+"?api_key=32cb6faf9cc08a926e2d720cf5bf75ea", lastEp)
      setlastEp(data.last_episode_to_air)
      console.log(data.last_episode_to_air)

    }


    async function getGenres() {
      let {data} = await axios.get("https://api.themoviedb.org/3/tv/"+TVID+"?api_key=32cb6faf9cc08a926e2d720cf5bf75ea", Genres)
      setGenres(data.genres)
      console.log(data.genres)


    }

    async function getTVDetails(TVID){

        let {data} = await axios.get("https://api.themoviedb.org/3/tv/"+TVID+"?api_key=32cb6faf9cc08a926e2d720cf5bf75ea", tvDetails)
        console.log(data)
        settvDetails(data)
      }



    useEffect(() => {
      getTVDetails(TVID)
      getGenres()
      getLastEp()
   
    }, [])
    
  return (
    


    <div >
<div className="mini-container">
      <div className="d-flex justify-content-center">
      <img className="img" src= {`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} alt="tv poster"></img>

<div>
      <h2 className="text-white">{tvDetails.name}</h2>
      <h5>Genres:</h5>

      {

        Genres.map((e)=> { return(
         
          <p className="text-white"> {e.name}</p>
         
        )
       
        })  
      }

      <h4 >Overview: <em className="text-white">{tvDetails.overview}</em></h4>

      
    <div className="updates">
    <p>Last updates: {lastEp.air_date}</p>
    <p>Episodes numbers: {lastEp.episode_number}</p>
    <h5>Last episode overview: <em className="text-white">{lastEp.overview}</em> </h5>

</div>

      <h5>watch   <a className="text-danger text-decoration-none" href={tvDetails.homepage}>here</a> </h5> 
      </div></div> </div>
      </div>


  )
}

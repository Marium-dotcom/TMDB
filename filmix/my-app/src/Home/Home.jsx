import React from 'react'
import Axios from 'axios'
import { useState, useEffect,useContext } from 'react'
import { filmix } from '../Filmixcontext'



export default function Home() {


  const {movieDB, setmovie, tvDB, settvDB,personDB, setPersonDB, getTrend} = useContext(filmix)



  useEffect(() => {
    getTrend("tv", 1, settvDB)
    getTrend("movie",1, setmovie)
    getTrend("person",1, setPersonDB)

  })

  return (
    <>
    <div className="container-fluid d-flex justify-content-center text-center">
  <div className="row">

  <div className="col-md-6">
    <h1>Welcome to Filmix</h1>
    <br />
    <h4>Enjoy watching the most trending movies</h4>
  </div>

   
  


{
 movieDB.slice(0,10).map((e,i) =>{
return (


<div key={i} className="col-md-3 col-sm-6 ">

<img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt="movie poster"></img>


<h3> {e.title}</h3>
<p >Rating: {e.vote_average}</p>
</div>


) 
})}










</div>
</div>
    
    
     <div className="container-fluid d-flex justify-content-center text-center">
    <div className="row">

    <div className="col-md-6">
<h1>Filmix</h1>
<br />
<h4>Grab your popcorn & enjoy watching the most  TV Shows on Filmix</h4>
</div>
    

    {

      tvDB.slice(0,10).map((e,i)=>{
        return(
          

        <div key={i} className="col-md-3 col-sm-6 ">
      
      <img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt="tv poster"></img>

        <h3>{e.name}</h3>




        <p>Rating: {e.vote_average}</p>
        </div>

        )

      })

    }
    </div>
    </div>


    <div className="container-fluid d-flex justify-content-center text-center">
                  <div className="row">

                  <div className="col-md-6">
                    <h2>Most 10 trending celebrities</h2>
                    </div>  

                
                {
                  personDB.slice(0,10).map((e,i) => {return(
                  
           <div  key={i}  className="col-md-3 col-sm-6 ">
           <img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="person poster"></img>
           <h3>{e.name}</h3>
           <p>Popularity: {e.popularity}</p>
           </div>
                  )})
                }




                  </div>
                  </div>
</>
  )
}

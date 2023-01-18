
import './Movie.css'
import axios from 'axios'
import React from 'react'
import { useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { filmix } from '../Filmixcontext'


export default function Movies() {

  let pages = new Array(15).fill(1).map((p,i)=>i+1)
  
  const {movieDB, setmovie, getTrend} = useContext(filmix)
  



useEffect(()=> {
  getTrend("movie",1, setmovie)
},[])


  return( <>

  <div className="container">

  <div className=" d-flex justify-content-center text-center">
    
  <div className="row">

 

   
  


{
 movieDB.map((e,i) =>{
return (


<div key={i} className="col-md-3 col-sm-6 ">
  <Link to={"/MovieDetails/"+e.id}>
<img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt="movie poster"></img>
</Link>

<h3> {e.title}</h3>
<p >Rating: {e.vote_average}</p>
</div>


) 
})}





<nav aria-label="...">
  <ul className="pagination pagination-sm d-flex justify-content-center">
    {
    pages.map((pge)=> <li onClick={()=>getTrend("movie",pge,setmovie)} className="page-item disabled ">
    <a className="page-link bg-transparent text-white">{pge}</a>
  </li>)
}


  </ul>
</nav>




</div>
</div> </div></>) 
   

  }

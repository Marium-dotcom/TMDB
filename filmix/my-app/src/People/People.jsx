import React from 'react'
import './people.css'
import Axios from 'axios'
import { useState, useEffect, useContext} from 'react'
  import { filmix } from '../Filmixcontext'

export default function People() {

  let pages = new Array(15).fill(1).map((p,i)=>i+1)

  const {personDB, setPersonDB, getTrend} = useContext(filmix)
 

  useEffect(() => {
    getTrend("person",1,setPersonDB)
  

  }, [])
  return (
    <>
                <div className="container-fluid d-flex justify-content-center text-center">
                  <div className="row">


                
                {
                  personDB.map((e,i) => {return(
                  
           <div  key={i}  className="col-md-3 col-sm-6 ">
           <img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="person poster"></img>
           <h3>{e.name}</h3>
           <p>Popularity: {e.popularity}</p>
           </div>
                  )})
                }




                  </div>
                  </div>
                  <nav aria-label="...">
  <ul className="pagination pagination-sm d-flex justify-content-center">
    {
    pages.map((pge)=> <li onClick={()=>getTrend("person",pge,setPersonDB)} className="page-item disabled ">
    <a className="page-link bg-transparent text-white">{pge}</a>
  </li>)
}


  </ul>
</nav>
    </>
  )
}

import React from 'react'
import './TV.css'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { filmix } from '../Filmixcontext'



export default function TV() {
  let tvpges = new Array(15).fill(1).map((e,i) =>i+1)
  
  console.log()

  const {tvDB, settvDB ,getTrend} = useContext(filmix)


  useEffect(() => {
    getTrend("tv", 1, settvDB)
  
   
  }, [])



  
  return (
    <>
                 <div className="container-fluid d-flex justify-content-center text-center">
                  <div className="row w-75 text-center m-auto">

          

                  {

                    tvDB.map((e,i)=>{
                      return(
                        

                      <div key={i} className="col-md-3 col-sm-6 ">
                        <Link to = {"/TVDetails/"+e.id}>
                      <img className="hover" src= {`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt="tv poster"></img>
                      </Link>

                      <h3>{e.name}</h3>




                      <p >Rating: {e.vote_average}</p>
                      </div>

                      )

                    })

                  }
                  </div>
                  </div>


                  <nav aria-label="...">
  <ul className="pagination pagination-sm d-flex justify-content-center">
    {
    tvpges.map((pge)=> <li onClick={()=>getTrend("tv", pge, settvDB)} className="page-item disabled ">
    <a className="page-link bg-transparent text-white">{pge}</a>
  </li>)
}


  </ul>
</nav>

    </>
  )
                }

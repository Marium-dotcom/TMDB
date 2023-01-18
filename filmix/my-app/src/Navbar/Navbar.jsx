import React from 'react'

import {Link, useNavigate} from 'react-router-dom'

export default function Navbar({islogin, checklogin, jwt,setjwt}) {
let logoutnav =  useNavigate()

  function logout(){
    localStorage.removeItem("token")
    checklogin()
    logoutnav('/login')
    setjwt("")

  }
  return (



    
    
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
            <div className="container-fluid">
                <a className="navbar-brand text-white" >Hi {jwt} &#128525; </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                </button>

                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {islogin===null? <>
                   <li className="nav-item">  <Link to ="Register" className="nav-link">Register</Link></li> 
                         <li className="nav-item">  <Link to ="Login" className="nav-link">Login</Link></li>  </>:''}


                  {islogin!==null? <>
                    <li className="nav-item "><Link to ="/"  className="navbar-brand text-white">Home</Link> </li>

                    <li className="nav-item "><Link to ="Movies" className="navbar-brand text-white">Movies</Link></li> 
                   <li className="nav-item"><Link to ="People" className="navbar-brand text-white">People</Link></li> 
                   <li className="nav-item"><Link to ="TV"  className="navbar-brand text-white">TV Shows</Link> </li>

                   {islogin!==null? <li className="nav-item"><a  className="navbar-brand text-white" onClick={logout}>Logout</a></li> :""
}
                   </>:''}
                   
                   
                   

                

                    </ul>

                </div>
                </div>
        </nav>
    
  )
}

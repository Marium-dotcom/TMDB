import React, { useState } from 'react'
import Axios from 'axios'
import Joi from 'joi'
import { useNavigate} from 'react-router-dom'



export default function Login({checklogin}) {


  let navToHome = useNavigate()
  
  const [user,setUser] = useState({

    email : "",
    password : "",
  })


  function getUser(e){
    console.log(e.target.value)
    let deepUser = {...user}
    deepUser[e.target.id] = e.target.value
    setUser(deepUser)


  }


 



 async function postUser(e){
  e.preventDefault()



  if (validateUser() === true) 
  {
  let {data} = await  Axios.post('https://route-movies-api.vercel.app/signin', user)
  setError(data.message)



  if (data.message === 'success'){
    localStorage.setItem('token', data.token) 
    checklogin()
  navToHome("/")}
 }



  }



  function validateUser()
  
  {
     let validUser = Joi.object(

      {

        email : Joi.string().email({tlds:{allow: false}}),
        password :

        Joi.string()
        .min(8)
        .max(25)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
        'password'),

      }

     )

     let finalValid = validUser.validate(user , {abortEarly:false})

    if (finalValid.error !== undefined)
    {

     setError(finalValid.error.details)
     console.log(finalValid.error.details )

     return false
    }
     else { return true
  }}



  const [error, setError] = useState([])


  




  return (
    <>
    <h2 className="text-center">Login</h2>
    <form onSubmit={(e) =>{postUser(e)}}>


    <h3>{error.length > 0 ? error.map((e , i)=>
    { 
            if (e.message.includes('pattern')) {
              e.message = 'Password must contain an Upper case,  lower case and a special character (8 characters)'
            }
      return <p key = {i}>{e.message}</p>

    
  }) : ""}</h3>
    <div className="inputbox">
    <input  onChange={(e)=> {getUser(e)}}type="email" placeholder="Email" className="inpt" id="email"></input>
    <input onChange={(e)=> {getUser(e)}} type="password" placeholder="Password" className="inpt" id="password"></input>
    <button type="submit">Login</button>
</div>
</form>


</>


    
    
  )
}

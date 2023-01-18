import React, { useState } from 'react'
import './Register.css'
import Axios from 'axios'
import Joi from 'joi'
import { useNavigate} from 'react-router-dom'



export default function Register() {


  let navMethod = useNavigate()
  
  const [user,setUser] = useState({
    first_name : "",
    last_name :"",
    email : "",
    password : "",
    age : ""
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
  let {data} = await  Axios.post('https://route-movies-api.vercel.app/signup', user)
  console.log(data)
  if (data.message === 'success') {
    navMethod('/Login')
  }
  
 

}






  }



  function validateUser()
  
  {
     let validUser = Joi.object(

      {
        first_name : Joi.string().alphanum().min(2).required(),
        last_name :Joi.string().alphanum().min(2).required(),
        email : Joi.string().email({tlds:{allow: false}}),
        password :

        Joi.string()
        .min(8)
        .max(25)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
        'password'),

        age : Joi.number().min(13).required()
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
  const [load, setLoad] = useState(false)


  




  return (
    <>
    <h2 className="text-center">Register</h2>
    <form onSubmit={(e) =>{postUser(e)}}>


    <h3>{error.length > 0 ? error.map((e , i)=>
    { 
            if (e.message.includes('pattern')) {
              e.message = 'Password must contain an Upper case,  lower case and a special character (8 characters)'
            }
      return <p key = {i}>{e.message}</p>

    
  }) : ""}</h3>
    <div className="inputbox">
    <input onChange={(e)=> {getUser(e)}} type="text" placeholder="First Name" className="inpt" id="first_name"></input>
    <input onChange={(e)=> {getUser(e)}} type="text" placeholder="Last Name" className="inpt" id="last_name"></input>
    <input onChange={(e)=> {getUser(e)}} type="number" placeholder="Age" className="inpt" id="age"></input>
    <input onChange={(e)=> {getUser(e)}} type="email" placeholder="Email" className="inpt" id="email"></input>
    <input onChange={(e)=> {getUser(e)}} type="password" placeholder="Password" className="inpt" id="password"></input>
    <button type="submit">Register</button>
</div>
</form>


</>


    
    
  )
}

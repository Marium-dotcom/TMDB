import './App.css';
import {useState, useEffect} from 'react'
import Movies from './Movies/Movies.jsx';
import Home from './Home/Home.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Navbar from './Navbar/Navbar.jsx';
import People from './People/People.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import TV from './TV Shows/TV.jsx';
import TVDetails from './TVShowsDetails/TVDetails';
import {Routes , Route} from 'react-router-dom';
import Protectedroute from './Protectedroute.jsx';
import jwtDecode from 'jwt-decode';
import Filmixcontext from './Filmixcontext';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {


  const [islogin, setislogin] = useState(null)
  const [jwt, setjwt] = useState('')

 
 
  useEffect(() => {

    let loginchecker =  localStorage.getItem('token') //null or not
    if (loginchecker !== null)
    {

    let jwtusername = jwtDecode(loginchecker)
    setjwt(jwtusername.first_name)

  }
    setislogin(loginchecker) 
    console.log(islogin)
  }, [islogin])
  


  return (
    <> 
    <Filmixcontext>

      <Navbar checklogin={setislogin} islogin={islogin} jwt={jwt} setjwt={setjwt}/>
    <Routes>
    <Route path="Movies" element={<Protectedroute><Movies/></Protectedroute>}/>
    <Route path ="/" element={<Protectedroute><Home/></Protectedroute>}></Route>

    <Route path="MovieDetails/:movieID" element={<Protectedroute><MovieDetails/></Protectedroute>}/>
    <Route path="TVDetails/:TVID" element={<Protectedroute><TVDetails/></Protectedroute>}/>
    <Route path="People" element={<Protectedroute><People/></Protectedroute>}/>
    <Route path="Register" element={<Register/>}/>
    <Route path="Login" element={<Login checklogin={setislogin}/>}/>
    <Route path ="TV" element={<Protectedroute><TV/></Protectedroute>}></Route>


    
    
    </Routes>
    </Filmixcontext>
    </>
  );
}

export default App;

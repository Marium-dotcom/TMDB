import React, { createContext , useState} from 'react'
import Axios from 'axios'

export let filmix = createContext()

export default function Filmixcontext(e) {

    const [movieDB, setmovie] = useState([''])
    const [tvDB, settvDB] = useState([''])
    const [personDB , setPersonDB] = useState([''])

    async function getTrend(type ,pge, set){
        let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=32cb6faf9cc08a926e2d720cf5bf75ea&page=${pge}`)
        set(data.results)
     }


  return (
    <>
    <filmix.Provider value = {{movieDB, setmovie, tvDB, settvDB,personDB, setPersonDB, getTrend}}>
    {e.children}
    </filmix.Provider>
    </>
  )
}
import axios from 'axios'
import { useState  , useEffect} from 'react';


export default function Home()
     {
       useEffect(()=>{                  // on load //  automatics data come 
            api();
       } , [])
      const[ttl , setTll]=useState("") // DATA STORE //Hooke step
     // API CALLING AXIOS API
     function api(){
       axios.get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(response=>{
        setTll(response.data.data.summary.total)
        console.log(response.data.summary.total)
      })
     }
    return (
      <>
   
      <center>
        <h1 className='text-xl p-4'>API CALL IN REACT USING AXIOS</h1>
        <input type="button" onClick={api} value={"API CALL"} />
        <h1>Total Covid Case:{ttl}</h1>
      </center>
      

      </>
       
        
    );
  }
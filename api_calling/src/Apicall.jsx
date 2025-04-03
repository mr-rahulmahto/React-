import axios from 'axios'
import { useState  , useEffect} from 'react';


export default function Apicall()
{
    useEffect(()=>{                  // on load //  automatics data come 
        api();
   } , )


     const[sts , setTll]=useState("") // DATA STORE //Hooke step
     const[data , setData]=useState([])  // Array Data 
     // API CALLING AXIOS API
     function api(){
     axios.get("https://codingshika.com/APP/WS_API/select_test.php")
     .then(response=>{
      setTll(response.data.posts.status)
      setData(response.data.posts.post) 
       console.log(response.data.posts.post)
       console.log("Array= " +data)
  })
 }
    return(
        <>
        
        <h1> API Calling for CoDing  </h1>
        
     
   
      <center>
     <h1 className='text-xl p-4'>API CALL IN REACT USING AXIOS</h1>
     <input type="button" onClick={api} value={"API CALL"} />
     <h1>Status:{sts}</h1>
     
      </center>
        
        
        </>
    );

}
import axios from "axios"
import { useEffect ,useState } from "react";
export default function About()
{

    const [ste, setDat] = useState(" ");
    const [sts, setTp] = useState([]);

    useEffect(()=>{                  // on load //  automatics data come 
            apicl();
    } , [])


      function apicl(){
    axios.get("https://codingshika.com/APP/WS_API/select_test.php")
    .then(Response=>{
        setDat(Response.data.posts.status);
        //console.log(Response.data);
        let ar=Response.data.posts.post
        setTp(ar);
        console.log(ar)
    }) 
    }
    return(
        <>
        
        <h1>This is  a About</h1>
        <center>
            <h2>Data : [{ste}]</h2>
            <div class="mt-4 p-5 text-white rounded">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">S_ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {sts.map((item)=>{
                            return( <tr>
                               <td>{item.S_ID}</td> 
                               <td>{item.Name}</td> 
                               <td>{item.Address}</td> 
                               <td>{item.Email}</td>
                               <td>
                                <button type="button" className="btn btn-success button">Save</button>
                                <button type="button" className="btn btn-warning button">Update</button>
                                <button type="button" className="btn btn-danger button">Delete</button>

                                </td> 
                            </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
        </center>
        
        
        
        
        </>
    )

}
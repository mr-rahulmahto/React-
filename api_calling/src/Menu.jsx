import axios from "axios"
import { useEffect ,useState } from "react";
export default function Menu()
{

    const [data, setTp] = useState([]);

    useEffect(()=>{                  // on load //  automatics data come 
            apicl();
    } , []);


      function apicl(){
    axios.get("http://127.0.0.1:5173/menu")
    .then(Response=>{
        console.log(Response.data.menu);
        let ar=Response.data.menu
        setTp(ar);
        console.log(ar)
    }) 
    }
    return(
        <>
        
        <center><h1>Menu card</h1></center>
        <center>
            <div class="mt-4 p-5 text-white rounded">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Menu ID</th>
                            <th scope="col"> Menu Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Food Type</th>
                            <th scope="col">Quntity</th>
                            <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((b)=>{
                            return( <tr>
                               <td>{b.mid}</td> 
                               <td>{b.mname}</td> 
                               <td>{b.price}</td> 
                               <td>{b.fid}</td> 
                               <td>{b.qid}</td> 
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
// API CALLING STRUCTURE IN REACT IN SITE
import axios from "axios";
import { useEffect , useState } from "react";
export default function Covidapi ()
{
    const [ste, setDat] = useState(" ");
    const [data, setData] = useState([]);

    useEffect(()=>{                  // on load //  automatics data come 
            apicovid();
    } , [])


      function apicovid(){
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(Response=>{
        setDat(Response.data.data.summary.total);
        //console.log(Response.data);
        let ar=Response.data.data.regional
        setData(ar);
        console.log(ar)
    }) 
    }
    return(
        <>
        <center>
        <h1>This is  a Covid Total Case {ste} </h1>
        <div class="mt-4 p-5 text-white rounded">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Location</th>
                            <th scope="col">Indian</th>
                            <th scope="col">Foreign</th>
                            <th scope="col">Discharge</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Total Confirmed Case</th>
                            <th scope="col"></th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((a)=>{  // a IS VARIABLE YOU CAN SET ANY NAME  //  confirmedCasesIndian => KEY WORD IN API YOU CAN'T CHANGE THIS KEYWORD
                            return( <tr>
                               <td>{a.loc}</td> 
                               <td>{a.confirmedCasesIndian}</td>  
                               <td>{a.confirmedCasesForeign}</td> 
                               <td>{a.discharged}</td>
                               <td>{a.deaths}</td>
                               <td>{a.totalConfirmed}</td>
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
    );

}
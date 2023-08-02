// /* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

function Details() {
  const [details, setDetails] = useState([]);
  const [loading,setLoading] = useState(true)
  const params = useParams()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://anonjotapi.vercel.app/notes/${params.id}`, { cache: true });
        setDetails(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
  fetchData()
  }, [params.id])

  
  // useEffect(() => {
  //   axios.patch(`http://localhost:3000/notes/${params.id}`)
  //     .then((res) => {
  //       if (res.data) {
  //         setDetails(res.data);
  //       }
  //     });
  // }, [params.id]);
   
  const handleRemove = () => {
    axios.delete(`https://anonjotapi.vercel.app/notes/${params.id}`)
      .then(() => {
          setDetails(details.filter((details) => details.id !== details.id));
        })
    }
    
    if(loading) return(< Loader />)
      
   return (
     <> 
       <div className="m-8">
         <div className=" card text-secondary-content mb-4 flex justify-center bg-secondary p-8" key={details.id}>
           <h1> {details.title} </h1>
           <p> {details.body}</p>
       </div>
       <div onClick={()=>window.location.href='/'}>
         <button onClick={()=> handleRemove(details.id)} className="btn btn-md md:btn-md lg:btn-lg btn-error">Delete</button>
       </div>
         
       </div>
     </>
   );
 }

 export default Details;

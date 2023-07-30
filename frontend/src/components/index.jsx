import '../index.css'
import axios from "axios"
import Details from "../components/detail";
import { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';

function Notes() {
  const [content, setContent] = useState([]);
  const [loading,setLoading] = useState(true)
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anonjotapi.vercel.app/notes', { cache: true });
        setContent(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
  fetchData()
  }, []);

<Route path={'/detail/id'} Component={Details} />
if(loading) return(<p>Loading please wait...</p>)


return (
  <>
  
    <div className='main'>
    {content.map((note) => (
      
      <div key={note.id} className='homeDiv'>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <Link to={`/detail/${note._id}`}>Details</Link>
        </div>
    ))}
    </div>
  </>
);

}

export default Notes;

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
if(loading) return(<p className='text-3m'>Loading please wait...</p>)


return (
  <>
  
    <div>
    {content.map((note) => (
      // eslint-disable-next-line react/jsx-key
      <div className='card w-96 bg-primary text-primary-content mb-4' >
      <div key={note.id} className='card-body'>
        <Link to={`/detail/${note._id}`}>
        <h1 className='card-title'>{note.title}</h1>
        <p>{note.body}</p>
        </Link>
        </div>
        </div>
    ))}
    </div>
  </>
);

}

export default Notes;

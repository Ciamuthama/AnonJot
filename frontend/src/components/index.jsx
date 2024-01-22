import '../index.css'
import axios from "axios"
import Details from "../components/detail";
import { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import { Loader } from './Loader';

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
if(loading) return(<Loader />)


return (
  <>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4  mx-8  md:mx-32'>
    {content.map((note) => (
      // eslint-disable-next-line react/jsx-key
      <div className='card  bg-primary text-primary-content mb-4 flex justify-center' >
      <div key={note.id} className='card-body'>
        <Link to={`detail/${note._id}`}>
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

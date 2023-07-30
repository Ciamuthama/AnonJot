/* eslint-disable react/prop-types */
import {  useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function New() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate()

  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  function onBodyChange(e) {
    setBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: title, body: body
      
    }
    
    axios
    .post("https://anonjotapi.vercel.app/notes/new", note)
    .then((res) => res.data,
    )
    .catch((err)=> err)
       
     setTitle("");
     setBody("");
     console.log(title, body)
     
    navigate('..')
    }
    
 
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          name="body"
          id="body"
          placeholder="Note"
          value={body}
          onChange={onBodyChange}
          />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default New;

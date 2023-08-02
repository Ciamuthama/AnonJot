/* eslint-disable react/prop-types */
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../index.css'

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
      <form onSubmit={handleSubmit} className="flex flex-col justify-center m-8 w-full">
          <input
          className="input-md input-bordered input-info w-full mb-8"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
          <textarea
          className=" mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name="body"
          id="body"
          placeholder="Note"
          value={body}
          onChange={onBodyChange}
          />
        <button type="submit" className="btn">Submit</button>
      </form>
    </>
  );
}

export default New;

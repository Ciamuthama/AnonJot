/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  function onBodyChange(e) {
    setBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: title,
      body: body,
    };

    axios
      .post("https://anonjotapi.vercel.app/notes/new", note)
      .then((res) => res.data)
      .catch((err) => err);

    setTitle("");
    setBody("");
    console.log(title, body);

    navigate("..");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center m-8"
      >
        <input
          className="input-md input-bordered bg-primary-content rounded-lg  w-full mb-8 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          rows="4"
          className="block p-2.5 w-full h-screen text-sm text-gray-900 bg-primary-content rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"
          style={{ height: "260px" }}
          name="body"
          id="body"
          placeholder="Note"
          value={body}
          onChange={onBodyChange}
        />
        <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-md md:btn-md lg:btn-lg btn-accent"
        >
          Submit
        </button>

        </div>
      </form>
    </>
  );
}

export default New;

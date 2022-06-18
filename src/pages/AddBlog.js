import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import Header from "../components/Header";

import Darkmode from "darkmode-js";
new Darkmode().showWidget();

const AddBlog = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTime, setNewTime] = useState(0);
  const [newDate, setNewDate] = useState(0);
  
// eslint-disable-next-line
  const [note, setUsers] = useState([]);
  const noteCollectionRef = collection(db, "note");
  const navigate = useNavigate();

  const createUser = async () => {
    await addDoc(noteCollectionRef, {
      title: newTitle,
      content: newContent,
      time: newTime,
      date: newDate,
    });
    navigate(`/`);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(noteCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers(); // eslint-disable-next-line
  }, []);


  return (
    <div classTitle='App' className='noSelect'>
      <Header />
      <div className='addBlog moveUp'>
        <h1>Create a new Blog</h1>
        <input
          placeholder='Title...'
          id='formTitle'
          className='formContent'
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />{" "}
        <br />
        <input
          type='date'
          className='formContent'
          id='formDate'
          placeholder='Date...'
          onChange={(event) => {
            setNewDate(event.target.value);
          }}
        />
        <input
          type='time'
          className='formContent'
          id='formTime'
          placeholder='Time...'
          onChange={(event) => {
            setNewTime(event.target.value);
          }}
        />{" "}
        <br />
        <textarea
          rows={15}
          id='formContent'
          className='formContent'
          placeholder='Content...'
          onChange={(event) => {
            setNewContent(event.target.value);
          }}
        />{" "}
        <br />
        <div className='buttons'>
            <Link to="/">
                <button
                    type='button'
                    className='btn btn-outline-dark'
                    data-bs-dismiss='modal'>
                    Cancel
                </button>
            </Link>
          <button className='btn btn-primary' onClick={createUser} id="button">
            {" "}
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

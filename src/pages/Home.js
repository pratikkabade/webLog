import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Header from "../components/Header";
import "../App.css";

import Darkmode from 'darkmode-js';
new Darkmode().showWidget();

function reload() {
    window.location.reload();
  }
  
  function Home() {  
    const [note, setUsers] = useState([]);
    const noteCollectionRef = collection(db, "note");
  
  
    const deleteUser = async (id) => {
      const userDoc = doc(db, "note", id);
      await deleteDoc(userDoc);
      reload();
    };
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(noteCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers(); // eslint-disable-next-line
    }, []);
  
    const options = {
      bottom: '80px', // default: '32px'
      right: '30px', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    return (
        <div classTitle='App' className="noSelect">
          <Header />
          <div className='App '>
            {note.map((user) => {
              return (
                <div className='Paper moveDown'>
                  {" "}
                  <h2 className="h3Title">
                    {user.title}
                  </h2>
                  <h5 className="h5Time">
                    <span>Dated</span> {user.date}
                    <span> at </span> {user.time}
                  </h5>
                  <h3 className="h3Content">
                    {user.content}
                  </h3>
                  <div className="btndel">
                  <button
                    className='btn btn-danger '
                    onClick={() => {
                      deleteUser(user.id);
                    }}>
                    {" "}
                    Delete
                  </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='footer'>
            <Link to="/addblog">
                <button
                type='button'
                className='btn btn-outline-primary'
                id='createBtn'>
                Create a new Blog
                </button>
            </Link>
          </div>
        </div>
      );
    }

export default Home


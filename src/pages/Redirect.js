import React from 'react'
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";




const Redirect = () => {

    const navigate = useNavigate();

    var url = navigate("/addblog");
    var delay = "5000";
    window.onload = function () {
        setTimeout(GoToURL, delay);
    }
    function GoToURL() {
        window.location.replace(url);
    }


  return (
    <div>
        <Header/>
        <div className='redirectPage'>
            <h1>Requested page <i>not</i> found</h1>
            <h2>Redirecting you to the homepage...</h2>
        </div>
    </div>
  )
}

export default Redirect
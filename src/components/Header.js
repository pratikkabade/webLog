import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const hrtLogo = {
        width: "50px",
        borderRadius: "50%",
        filter: "brightness(1.2)"
      };

  return (
    <div>
    <nav id="customNav" class="navbar navbar-expand-sm bg-light fixed-top">
        <div class="container-fluid justify-content-start">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link to="/"><img style={hrtLogo} id="hrtLogo" src="https://avatars.githubusercontent.com/u/76637730?v=4" alt='logo' /></Link>
            </li>
        </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header
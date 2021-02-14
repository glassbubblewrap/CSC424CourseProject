import React from 'react'
import {Link} from 'react-router-dom'
import './css/MainNavBar.css'

function MainNavBar(){
    return(
        <nav id = 'mainNav'>
            <ul>
            <Link to= '/' className= 'navLink'>
                <li> Home </li>
            </Link>
            <Link to= '/orgs'  className= 'navLink'>
                <li> Your Organizations </li>
            </Link>
            <Link to= '/browse'  className= 'navLink'>
                <li> Browse Organizations </li>
            </Link>
            <Link to= '/registerOrg'  className= 'navLink'>
                <li> Register Your Organization </li>
            </Link>
            <Link to= '/profile'  className= 'navLink'>
                <li> Your Profile </li>
            </Link>
            <Link to= '/login'  className= 'navLink'>
                <li> Log In</li>
            </Link>
            <Link to= '/signup'  className= 'navLink'>
                <li>Sign Up</li>
            </Link>
        </ul>
      </nav>
    )
}
export default MainNavBar
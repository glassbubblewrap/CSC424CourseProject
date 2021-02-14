import React from 'react'
import {Link} from 'react-router-dom'
import './css/MainNavBar.css'

function MainNavBar(){
    return(
        <nav id = 'mainNav'>
            <ul>
            <Link to= '/' class= 'navLink'>
                <li> Home </li>
            </Link>
            <Link to= '/orgs'  class= 'navLink'>
                <li> Your Organizations </li>
            </Link>
            <Link to= '/browse'  class= 'navLink'>
                <li> Browse Organizations </li>
            </Link>
            <Link to= '/registerOrg'  class= 'navLink'>
                <li> Register Your Organization </li>
            </Link>
            <Link to= '/profile'  class= 'navLink'>
                <li> Your Profile </li>
            </Link>
            <Link to= '/login'  class= 'navLink'>
                <li> Log In</li>
            </Link>
            <Link to= '/signup'  class= 'navLink'>
                <li>Sign Up</li>
            </Link>
        </ul>
      </nav>
    )
}
export default MainNavBar
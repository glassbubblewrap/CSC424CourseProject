import React from 'react'
import {Link} from 'react-router-dom'


class OrgNavBar extends React.Component{


    render(){
    return(
        <nav id = 'OrgNav'>
            <ul>
            <Link to= '/orgHome' class= 'navLink'>
                <li> Organization Home </li>
            </Link>
            <Link to= '/announcements' class= 'navLink'>
                <li> Announcements </li>
            </Link>
            <Link to= '/events' class= 'navLink'>
                <li> Events </li>
            </Link>
            <Link to= '/members'  class= 'navLink'>
                <li> Members</li>
            </Link>
            <Link to= '/chat' class= 'navLink'>
                <li> Chat</li>
            </Link>
        </ul>
      </nav>
    )
    }
}
export default OrgNavBar
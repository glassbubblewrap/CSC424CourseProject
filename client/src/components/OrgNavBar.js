import React from 'react'
import {Link} from 'react-router-dom'


class OrgNavBar extends React.Component{


    render(){
    return(
        <nav id = 'OrgNav'>
            <ul>
            <Link to= '/orgHome' className= 'navLink'>
                <li> Organization Home </li>
            </Link>
            <Link to= '/announcements' className= 'navLink'>
                <li> Announcements </li>
            </Link>
            <Link to= '/events' className= 'navLink'>
                <li> Events </li>
            </Link>
            <Link to= '/members'  className= 'navLink'>
                <li> Members</li>
            </Link>
            <Link to= '/chat' className= 'navLink'>
                <li> Chat</li>
            </Link>
        </ul>
      </nav>
    )
    }
}
export default OrgNavBar
import React from 'react'
import {Link} from 'react-router-dom'
import './css/OrgNavBar.css'


class OrgNavBar extends React.Component{


    render(){
    return(
        <nav id = 'OrgNav'>
            <ul>
            <Link to= '/orgHome' className= 'OrgLink'>
                <li> Organization Home </li>
            </Link>
            <Link to= '/announcements' className= 'OrgLink'>
                <li> Announcements </li>
            </Link>
            <Link to= '/events' className= 'OrgLink'>
                <li> Events </li>
            </Link>
            <Link to= '/members'  className= 'OrgLink'>
                <li> Members</li>
            </Link>
            <Link to= '/chat' className= 'OrgLink'>
                <li> Chat</li>
            </Link>
        </ul>
      </nav>
    )
    }
}
export default OrgNavBar
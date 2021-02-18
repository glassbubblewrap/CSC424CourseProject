import React from 'react'
import {Link} from 'react-router-dom'
import './css/MainNavBar.css'

class MainNavBar extends React.Component{


 
    constructor(props){
        super(props)
        this.state = {loggedIn: this.props.loggedIn, userId: this.props.userId}
    }

    render(){
        let activeLinks 
        if(this.state.loggedIn){
            activeLinks = (
                
            <React.Fragment>
                 <Link to= '/orgs'  className= 'navLink'>
                         <li> Your Organizations </li>
                     </Link>
                     <Link to= '/registerOrg'  className= 'navLink'>
                         <li> Register Your Organization </li>
                    </Link>
                     <Link to= '/profile'  className= 'navLink'>
                         <li> Your Profile </li>
                     </Link>
            </React.Fragment>
        )}
        else{
            activeLinks = (
            <React.Fragment>
                <Link to= '/login'  className= 'navLink'>
                    <li> Log In</li>
                </Link>
                <Link to= '/signup'  className= 'navLink'>
                    <li>Sign Up</li>
                </Link>
            </React.Fragment>

            )
        }
    return(
        <nav id = 'mainNav'>
            <ul>
            <Link to= '/' className= 'navLink'>
                <li> Home </li>
            </Link>
            <Link to= '/browse'  className= 'navLink'>
                <li> Browse Organizations </li>
            </Link>
           {activeLinks}
            
        </ul>
      </nav>
    )
    }
}
export default MainNavBar
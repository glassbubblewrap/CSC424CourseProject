import React from 'react'
import {Link} from 'react-router-dom'
import './css/MainNavBar.css'

class MainNavBar extends React.Component{


 
    constructor(props){
        super(props)
        this.state = {loggedIn: false, user: ''}
        this.getData = this.getData.bind(this)
    }
    componentDidMount(){

        setInterval(()=>{
            this.getData()
        }
        , 3000)

       
    }

    getData(){

        fetch('http://localhost:4000/checkIfloggedIn', {
            method:'GET',
            origin: 'http:localhost:4000',
            credentials: 'include'
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                this.setState({...this.state, loggedIn: true, user: data.user})
            }else{
                this.setState({...this.state, loggedIn: false})
            }
        })
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
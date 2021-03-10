import React from 'react'
import {Redirect} from 'react-router-dom'

class UserProfile extends React.Component{

    _isMounted = false
    constructor(props){
        super(props)
        this.state = {loggedIn: false, user: ''}
    }

    componentDidMount(){
        fetch('http://localhost:4000/checkIfloggedIn', {
          
            method:'GET',
            origin: 'http://localhost:4000',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                if(this._isMounted){
                    this.setState({...this.state, loggedIn: true, user: data.user})
                }
            }else{
            
                if(this._isMounted){
                    this.setState({...this.state, loggedIn: false})
                }    
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
        

    render(){

        return <h2>This is where a user would see their profile</h2>
    }
}

export default UserProfile
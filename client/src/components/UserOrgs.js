import React from 'react'
import {Redirect} from 'react-router-dom'
import GetUserOrgs from './GetUserOrgs'
//import RenderOrgCards from './RenderOrgCards'


// Will look similar to BrowseOrgs but only the orgs you have joined will appear
class UserOrgs extends React.Component{

    _isMounted = false

    constructor(props){
        super(props)
        this.state = { loggedIn: false, user: '', orgs: []}
    }
    
    componentDidMount(){
        this._isMounted = true

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
                //console.log('userfound')
                if(this._isMounted){
                    this.setState({...this.state, loggedIn: true, user: data.user})
                }
            }else{
            
                //console.log('user not found')
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

        return <GetUserOrgs/>
    }
}

export default UserOrgs
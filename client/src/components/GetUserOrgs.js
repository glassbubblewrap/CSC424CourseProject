import React from 'react'
//import {BrowserRouter as Router} from 'react-router-dom'
//import OrgCard from './OrgCard'


import RenderOrgCards from './RenderOrgCards'



class GetUserOrgs extends React.Component{

    constructor(props){
        super(props)
        this.state = {orgs: []}
    }
    componentDidMount(){
        //get the orgId, name and location from the database and save them in an array
        fetch('http://localhost:4000/getUserOrgs',{
            method: 'GET',
            origin: 'http://localhost:4000',
            credentials: 'include'
        
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({...this.state, orgs: data} )
        })
    }

    render(){


        if(this.state.orgs.length === 0){

            return(
                <p>You have not joined any organizations yet! Click Browse to find organizations to join</p>
            )
        
        }
        return(
            <div>  
                <RenderOrgCards orgs= {this.state.orgs}/>    
            </div>
        )
    }
}

export default GetUserOrgs
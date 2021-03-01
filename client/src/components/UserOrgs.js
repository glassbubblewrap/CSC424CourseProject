import React from 'react'
import RenderOrgCards from './RenderOrgCards'

// Will look similar to BrowseOrgs but only the orgs you have joined will appear
class UserOrgs extends React.Component{

    constructor(props){
        super(props)
        this.state = {orgs: []}
    }
    
    // componentDidMount(){
    //     //get the orgId, name and location from the database and save them in an arra
    //     fetch('http://localhost:40000/getUserOrgs',{method: 'GET'})
    //     .then(res=> res.json)
    //     .then(data => this.setState({...this.state, orgs : JSON.parse(data)} ))
    
    render(){
        return(

        <div>
        <h2>Here is where organization that you have joined will appear</h2>
        <p>This page will function similarly to the Browse Organizations page but will only find the organizations that the user has joined</p>
        <RenderOrgCards orgs= {this.state.orgs}/>
        </div>
        )

       

    }
}

export default UserOrgs
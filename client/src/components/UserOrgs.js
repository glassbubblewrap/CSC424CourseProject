import React from 'react'
import RenderOrgCards from './RenderOrgCards'

// Will look similar to BrowseOrgs but only the orgs you have joined will appear
class UserOrgs extends React.Component{
    
    // componentDidMount(){
    //     //get the orgId, name and location from the database and save them in an arra
    //     fetch('http://localhost:40000/getUserOrgs',{method: 'GET'})
    //     .then(res=> res.json)
    //     .then(data => this.setState({...this.state, orgs : JSON.parse(data)} ))
    render(){
        return(

        <div>
        <h2>Here is where organization that you have joined will appear</h2>
        <RenderOrgCards/>
        </div>
        )

       

    }
}

export default UserOrgs
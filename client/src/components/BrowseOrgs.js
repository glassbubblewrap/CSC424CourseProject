import React from 'react'
//import {BrowserRouter as Router} from 'react-router-dom'
//import OrgCard from './OrgCard'


import RenderOrgCards from './RenderOrgCards'



class BrowseOrgs extends React.Component{


    
    constructor(props){
        super(props)
        this.state = {orgs: [{id: 12345, name: 'Church Group', location: 'Hattiesburg Ms.'},{id:448894465, name: 'Book Club', location: 'Mobile Al'}]}
    }
    //Must get the org_id, name and location from the database

    // componentDidMount(){
    //     //get the orgId, name and location from the database and save them in an arra
    //     fetch('http://localhost:40000/getOrgCard',{method: 'GET'})
    //     .then(res=> res.json)
    //     .then(data => this.setState({...this.state, orgs : JSON.parse(data)} ))

    // }
    
   // render a search bar
   //render an OrgCard component for each of the Organizations returned
   // from the server

     /* <OrgCard id= '12345' name= 'My Organization' location= "Hattiesburg MS."/>
                    <OrgCard id= '6896767' name= 'ACM' location= "Hattiesburg MS." /> */
        render(){
        return(
            <div>

                <input type='search' id= 'searchBar' placeholder= 'Search'/>
                   
                <RenderOrgCards orgs= {this.state.orgs}/>    

            </div>
        )
        }
         
}

export default BrowseOrgs
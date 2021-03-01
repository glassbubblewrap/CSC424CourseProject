import React from 'react'
import GetBrowseOrgs from './GetBrowseOrgs'
//import {BrowserRouter as Router} from 'react-router-dom'

class BrowseOrgs extends React.Component{


    
    


    //Must get the org_id, name and location from the database

    // componentDidMount(){
    //     //get the orgId, name and location from the database and save them in an array
    //     fetch('http://localhost:4000/organization/getBrowseOrgs',{method: 'GET'})
    //     .then(res => res.json())
    //     .then(data =>{
    //         this.setState({...this.state, orgs: data} )
    //         console.log(this.state.orgs)
    //     })
    // }
    
   // render a search bar

    render(){
        return(
            <div>

                <input type='search' id= 'searchBar' placeholder= 'Search'/>
                   
                <GetBrowseOrgs/>   

            </div>
        )
    }
         
}

export default BrowseOrgs
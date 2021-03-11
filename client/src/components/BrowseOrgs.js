import React from 'react'
import GetBrowseOrgs from './GetBrowseOrgs'
import '../App.css'
//import {BrowserRouter as Router} from 'react-router-dom'

class BrowseOrgs extends React.Component{


    
   // render a search bar

    render(){
        return(
            <div className="browseOrgs">

                <input className="form-control mr-sm-2" type='search' id= 'searchBar' placeholder= 'Search'/>
                   
                <GetBrowseOrgs/>   

            </div>
        )
    }
         
}

export default BrowseOrgs
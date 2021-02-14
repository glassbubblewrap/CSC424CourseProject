import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import OrgCard from './OrgCard'



class BrowseOrgs extends React.Component{



    //Must get the org_id, name and location from the database

    
   // render a search bar
   //render an OrgCard component for each of the Organizations returned
   // from the server

    render(){


        return(
            <div>
                
            <Router>
           
                <div>

                    <input type='search' id= 'searchBar' placeholder= 'Search'/>
                    <OrgCard id= '12345' name= 'My Organization' location= "Hattiesburg MS."/>
                    <OrgCard id= '6896767' name= 'ACM' location= "Hattiesburg MS." />
                    
                
                       
                </div>
            </Router> 
          
    

            </div>
        )
         

    }
}

export default BrowseOrgs
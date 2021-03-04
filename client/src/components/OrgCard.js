import React from 'react'
import {Link} from 'react-router-dom'
import './css/OrgCard.css'

// This component will take the information of the organization as props 
// and render it 
// When the component is clicked the User will be taken to the org home page

class OrgCard extends React.Component{

    constructor(props){
        super(props);
        this.state = { id: this.props.id , name: this.props.name, location: this.props.location}
    }
    
    
    render(){

        let path = '/organization/' + this.state.id


        return(
            <div id='OrgCardDiv' className="card">
            <nav>
                <Link to= {path} >
                <div className="card-body">
                    <h3 className="card-title"> {this.state.name} </h3>
                    <p className="card-text"> {this.state.location} </p>
                </div>
                </Link>
            </nav>
            </div>

        )

    }


}



export default OrgCard
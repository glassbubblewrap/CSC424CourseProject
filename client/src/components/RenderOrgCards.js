import React from 'react'
import OrgCard from './OrgCard'



class RenderOrgCards extends React.Component{


    constructor(props){
        super(props)
        this.state = {orgs: this.props.orgs}
    }

   // this.state = {orgs: this.props.orgs}
  
    render(){

    
        return( 
        
        <div>
            {this.state.orgs.map((org) => (

                    <div>
                        <OrgCard id={org.id} name={org.name} location= {org.location} />
                    </div>

            ))}
        </div>
        )
    } 
}

export default RenderOrgCards
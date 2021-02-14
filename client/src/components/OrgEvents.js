import React from 'react'

class OrgEvents extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id}
    }
    render(){
        return(
            <div>
                <h1> {this.state.org_id}</h1>
                <h1>Your Orgs Events</h1>
            </div>

        )
    }
}
export default OrgEvents
import React from 'react'

class OrgChat extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id}
    }

    render(){
    return(
        <div>
            <h1> {this.state.org_id}</h1>
            <h1>Your Orgs Chat</h1>
        </div>

    )
    }
}
export default OrgChat
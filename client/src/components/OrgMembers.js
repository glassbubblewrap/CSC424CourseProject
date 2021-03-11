import React from 'react'
import Member from './Member'

class OrgMembers extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id, members: this.props.members}
    }
    render(){
        return(
            <div>
                <h1>Your Orgs Members</h1>

                {this.state.members.map((member) => (
                    <div>
                        <Member member={member}/>
                    </div>
                ))}
            </div>

        )
    }
}
export default OrgMembers
import React from 'react'


class Member extends React.Component{

    constructor(props){
        super(props)
        this.state = {member: this.props.member}
    
    }

    render(){
        return(

            <div>
                <h4> {this.state.member.user_email}</h4>
            </div>

        )
    }

}

export default Member
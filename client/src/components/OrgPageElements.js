import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import OrgHomePage from './OrgHome'
import OrgAnnouncements from './OrgAnnouncements'
import OrgEvents from './OrgEvents'
import OrgMembers from './OrgMembers'
import OrgChat from './OrgChat'
import OrgNavBar from './OrgNavBar';

class OrgPageElements extends React.Component{


    constructor(props){
        super(props)
        this.state = {org_id: this.props.match.params.org_id, org_data: '' , error:''}
    }
    componentDidMount(){

        fetch('http://localhost:4000/getOrganizationData',{    
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id: this.state.org_id})
    
    })
    .then(res => res.json())
    .then(data =>{
        if(data.error){
            this.setState({...this.state, error: data.error})
        }else{
            this.setState({...this.state, org_data: data})
        }
    })
    }

    render(){

        return(
            <div>
            <Router>
                <OrgNavBar/>
                <div>
                <Switch>
                    <Route path= '/orgHome' render= {(props) => (
                        <OrgHomePage {...props} org_id= {this.state.org_id} name={this.state.org_data.name} location= {this.state.org_data.location} about = {this.state.org_data.about} />
                    )} />
                    <Route path= '/announcements' render= {(props) => (
                        <OrgAnnouncements {...props} org_id= {this.state.org_id} announcements= {this.state.org_data.announcements}/>
                    )} />
                    <Route path ='/events' render= {(props) => (
                        <OrgEvents {...props} events ={this.state.org_data.events} org_id= {this.state.org_id} />
                    )}/>  
                    <Route path= '/members'render= {(props) => (
                        <OrgMembers {...props} members ={this.state.org_data.members} org_id= {this.state.org_id} />
                    )} />
                    <Route path= '/chat' render= {(props) => (
                        <OrgChat {...props} org_id= {this.state.org_id} />
                    )}/>
                </Switch>
                </div>
            </Router>
            </div>

        )

    }

}

export default OrgPageElements
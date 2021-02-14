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
        this.state = {org_id: this.props.match.params.org_id }
    }

    render(){

        return(
            <div>
            <Router>
                <OrgNavBar/>
                <div>
                <Switch>
                    <Route path= '/orgHome' render= {(props) => (
                        <OrgHomePage {...props} org_id= {this.state.org_id} />
                    )} />
                    <Route path= '/announcements' render= {(props) => (
                        <OrgAnnouncements {...props} org_id= {this.state.org_id} />
                    )} />
                    <Route path ='/events' render= {(props) => (
                        <OrgEvents {...props} org_id= {this.state.org_id} />
                    )}/>  
                    <Route path= '/members'render= {(props) => (
                        <OrgMembers{...props} org_id= {this.state.org_id} />
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
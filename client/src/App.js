import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
//import './App.css'
import MainNavBar from './components/MainNavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import UserOrgs from './components/UserOrgs'
import BrowseOrgs from './components/BrowseOrgs'
import UserProfile from './components/UserProfile'
import RegisterOrg from './components/RegisterOrg'
import OrgPageElements from './components/OrgPageElements'
//import ProtectedRoute from './components/ProtectedRoutes';

class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {loggedIn: false, user: ''}
    //  this.getData = this.getData.bind(this)
    }

  render(){
    return (
      <div>
        <title>ORGanizer</title>
        <Router>
          <div>
          <MainNavBar/>
          <Switch>
            <Route path= '/' exact component= {HomePage} /> 
            <Route exact path= '/orgs' component= {UserOrgs} />
            <Route path= '/browse' component= {BrowseOrgs} />
            <Route exact path = '/registerOrg' component = {RegisterOrg} />  
            <Route exact path= '/profile' component= {UserProfile}/>
            <Route path= '/login' component= {Login} />
            <Route path= '/signup' component= {SignUp} /> 
            <Route path= '/organization/:org_id' component= {OrgPageElements}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

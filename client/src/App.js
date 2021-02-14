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

function App() {
   // I would like to render profile  and register org if a user is logged in and Login and signup if not
  return (
    <div>
      <title>ORGanizer</title>
      <Router>
        <div>
        <MainNavBar/>
        <Switch>
          <Route path= '/' exact component= {HomePage} />
          <Route path= '/orgs' component= {UserOrgs} />
          <Route path= '/browse' component= {BrowseOrgs} />
          <Route path = '/registerOrg' component = {RegisterOrg}/>  
          <Route path= '/profile' component= {UserProfile} />
          <Route path= '/login' component= {Login} />
          <Route path= '/signup' component= {SignUp} />
          <Route path= '/:org_id' component= {OrgPageElements}/>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

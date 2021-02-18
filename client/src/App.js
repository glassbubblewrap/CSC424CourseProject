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
import ProtectedRoute from './components/ProtectedRoutes';

class App extends React.Component {

    constructor(props){
      super(props)
      this.state = {loggedIn: false, userId: ''}
      this.getData = this.getData.bind(this)
    }

// fetch session info to conditionally render navlinks based on if user is logged in
  componentDidMount(){
    this.getData()

    setInterval(this.getData, 5000)
  }

  getData(){
    fetch('http://localhost:4000/checkIfloggedIn', {method:'GET'})
    .then(res => res.json())
    .then(data => {
        if(data.loggedin){
            this.setState({...this.state, loggedin: data.loggedin, user: data.userId})
        }
    } )
}
   // I would like to render profile  and register org if a user is logged in and Login and signup if not

  render(){
  return (
    <div>
      <title>ORGanizer</title>
      <Router>
        <div>
        <MainNavBar loggedIn= {this.state.loggedIn} userId= {this.state.userId} />
        <Switch>
          <Route path= '/' exact component= {HomePage} />
          <Route exact path= '/orgs' component= {UserOrgs} userId = {this.state.userId} />
          <Route path= '/browse' component= {BrowseOrgs} />
          <Route exact path = '/registerOrg' component = {RegisterOrg} userId= {this.state.userId} />  
          <Route exact path= '/profile' component= {UserProfile} userId= {this.state.userId}/>
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

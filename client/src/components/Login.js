import React from 'react'
//import {Link} from 'react-router-dom'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = { email: '', password: '', error: ''}   // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleSubmit(e){

        //TO DO
        e.preventDefault()
        fetch('http://localhost:4000/loginSubmit', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        })
        .then(result=> result.json())
        .then(data => {

            if(data.error){
                this.setState({...this.state, error: data.error})
            }
        })




        // Process Data on server
        this.resetForm()
    }

    handleChange(e){
    //Used when characters are typed into the input field
        this.setState({
          ...this.state,
          [e.target.name]:  e.target.value
        });
    }

    //Set form back to initial state
    resetForm(){
        this.setState({ email: '', password: ''})    
    }

    render(){
    return(
        <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">               
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange= {this.handleChange} required/> 

                    <label htmlFor= "password">Password: </label>
                    <input type="password" name ="password" id= "password" value={this.state.password} onChange={this.handleChange} required/>

                    <input type= "submit" value= "Login"/>
                    
                    <p id='errorMessage'>{this.state.error} </p>
                    <p> Don't have an account? Sign Up <a href="/signup">here</a></p>
                </div>  
            </form>
        )
    }
}

export default Login
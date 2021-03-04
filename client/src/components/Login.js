import React from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'

//import {Link} from 'react-router-dom'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = { email: '', password: '', error: '', success: ''}   // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleSubmit(e){

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
            else{

                this.setState({...this.state, success: true})
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

        if(this.state.success){

            return <Redirect to= {{pathname:'/', state: {from: this.props.location}}} />
         }

    return(
        <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">  

                    <div className="form-group">             
                        <label htmlFor="email">Email: </label>
                        <input className="form-control" type="text" name="email" id="email" value={this.state.email} onChange= {this.handleChange} required/> 
                    </div>

                    <div className="form-group">
                        <label htmlFor= "password">Password: </label>
                        <input className="form-control" type="password" name ="password" id= "password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>

                    <input className="btn btn-primary" type= "submit" value= "Login"/>
                    
                    <p id='errorMessage'>{this.state.error} </p>
                
                </div>  
            </form>
        )
    }
}

export default Login
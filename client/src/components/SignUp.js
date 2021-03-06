import React from 'react'
import {Redirect} from 'react-router-dom'
import './css/SignUp.css'
import '../App.css'


class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = { name: '',email:'', password: '', confirmPassword: '', error:''}  // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

        fetch('http://localhost:4000/clearCookie', {
          origin: 'http://localhost:4000',
          credentials: 'include',
        })
    }


    handleSubmit(e){

       e.preventDefault()
       if(this.state.password !== this.state.confirmPassword){
           this.setState({...this.state, error: 'Password and Confirm Password fields must match'})
       }else{
        
            fetch('http://localhost:4000/signupSubmit', {
                method: 'POST',
                origin: 'http://localhost:4000',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name: this.state.name, email: this.state.email , password: this.state.password})
            })
            .then(result=> result.json())
            .then(data => {

                if(data.error){
                    this.setState({...this.state, error: data.error})
                }else{
                    this.setState({...this.state, success: true})
                }
        })
            //this.resetForm()
       }
    }

    handleChange(e){
    //Used when characters are typed into the input field
        const value = e.target.value;
        this.setState({
          ...this.state,
          [e.target.name]: value
        });
    }

    //Set form back to initial state
    resetForm(){
        this.setState({ name: '', email:'', password: '', confirmPassword:'',error:''})    
    }

    render(){

            if(this.state.success){
                return <Redirect to= {{pathname:'/', from: this.props.location}} />
             }

        return(
            <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">   
                
                    <div className="form-group">
                        <label htmlFor='name'> Name: </label>
                        <input className="form-control" type='text' id ='name' name='name' value={this.state.name} onChange= {this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor='email'> Email: </label>
                        <input className="form-control" type='text' id ='email' name='email' value={this.state.email} onChange= {this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor= 'password'>Password: </label>
                        <input className="form-control" type='password' id ='password' name ='password' value={this.state.password} onChange= {this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor= 'confirmPassword'>Confirm Password: </label>
                        <input className="form-control" type='password' id = 'confirmPassword' name ='confirmPassword' value={this.state.confirmPassword} onChange= {this.handleChange} required/>
                    </div>

                    <input className="btn btn-primary" type= 'submit' value= 'Create Account'/>
                    <p id= 'errorMessage'>{this.state.error}</p>
                    
                </div>
            </form>
        )
    }
}
export default SignUp
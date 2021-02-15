import React from 'react'
import './css/SignUp.css'


class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = { name: '',email:'', password: '', confirmPassword: '', error:''}  // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    async handleSubmit(e){
       //TO DO
       e.preventDefault()
       if(this.state.password !== this.state.confirmPassword){
           this.setState({...this.state, error: 'Password and Confirm Password fields must match'})
       }else{
        
            await fetch('http://localhost:4000/signupSubmit', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name: this.state.name, email: this.state.email , password: this.state.password})
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

        return(
            <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">   
                
                    <label htmlFor='name'> Name: </label>
                    <input type='text' id ='name' name='name' value={this.state.name} onChange= {this.handleChange} required/>
                
                    <label htmlFor='email'> Email: </label>
                    <input type='text' id ='email' name='email' value={this.state.email} onChange= {this.handleChange} required/>

                    <label htmlFor= 'password'>Password: </label>
                    <input type='password' id ='password' name ='password' value={this.state.password} onChange= {this.handleChange} required/>

                    <label htmlFor= 'confirmPassword'>Confirm Password: </label>
                    <input type='password' id = 'confirmPassword' name ='confirmPassword' value={this.state.confirmPassword} onChange= {this.handleChange} required/>
            
                    <input type= 'submit' value= 'Create Account'/>
                    <p id= 'errorMessage'>{this.state.error}</p>
                    <p> Already have an account? Login <a href= '/login'>here</a></p>
                </div>
            </form>
        )
    }
}
export default SignUp
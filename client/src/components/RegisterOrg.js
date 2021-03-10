import React from 'react'
import { Redirect } from 'react-router-dom';
import '../App.css'



class RegisterOrg extends React.Component{

    _isMounted = false

    constructor(props){
        super(props);
        this.state = { name: '',location:'', about: '', error:'', success: '', user: '', loggedIn: false}  // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    componentDidMount(){
        fetch('http://localhost:4000/checkIfloggedIn', {
        
            method:'GET',
            origin: 'http://localhost:4000',
            credentials: 'include'
        
        })
            .then(res => res.json())
            .then(data => {
                if(data.user){
                    if(this._isMounted){
                        this.setState({...this.state, loggedIn: true, user: data.user})
                    }
                }else{
                    if(this._isMounted){
                        this.setState({...this.state, loggedIn: false})
                    }
                
                
                }
            })
    }
    componentWillUnmount(){
        this._isMounted = false
    }
    handleSubmit(e){
       //TO DO
       e.preventDefault()

        fetch('http://localhost:4000/registerOrgSubmit', {
            method: 'POST',
            origin: 'http://localhost:4000',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name, location: this.state.location, about: this.state.about})
        })
        .then(result=> result.json())
        .then(data => {

            if(data.error){
                    this.setState({...this.state, error : data.error})
            }
            if(data.success){
                
                this.setState({...this.state, success: 'Your organization has been added successfully'})
            }
        })
        //this.setState({...this.state, error: 'Password and Confirm Password fields must match'})
   
        // Send Data to server 
       
    }

    handleChange(e){
    //Used when characters are typed into the input field

            this.setState({
            ...this.state,
            [e.target.name]: e.target.value
            });
    }

    //Set form back to initial state
    resetForm(){
        if(this._isMounted){
            this.setState({ name: '', location: '',about: '', error: '' })
        }    
    }

    render(){

        return(
            <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">   
                
                    <div className="form-group">
                        <label htmlFor='name'> Organization Name: </label>
                        <input className="form-control" type='text' id ='name' name='name' value={this.state.name} onChange= {this.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor='location'> Location: </label>
                        <input className="form-control" type='text' id ='location' name='location' value={this.state.location} onChange= {this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor='about'> About: </label>
                        <textarea className="form-control" id= 'about' name='about' value= {this.state.about} onChange= {this.handleChange} rows='4' cols='50'/>
                    </div>

                    <p>{this.state.error}</p>
                    <p>{this.state.success}</p>
                    
                    <input className="btn btn-primary" type= 'submit' value= 'Register Your Organization'/>
                
                </div>
            </form>
        )
    }
}
export default RegisterOrg

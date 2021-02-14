import React from 'react'



class RegisterOrg extends React.Component{

    constructor(props){
        super(props);
        this.state = { name: '',location:'', about: '', error:''}  // initial state
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleSubmit(e){
       //TO DO
       e.preventDefault()

        //this.setState({...this.state, error: 'Password and Confirm Password fields must match'})
   
        // Send Data to server 
       
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
        this.setState({ name: '', location: '',about: '' ,error:''})    
    }

    render(){

        return(
            <form onSubmit = {this.handleSubmit} method="POST">
                <div class="formcontent">   
                
                    <label for='name'> Organization Name: </label>
                    <input type='text' id ='name' name='name' value={this.state.name} onChange= {this.handleChange} required/>
                
                    <label for='location'> Location: </label>
                    <input type='text' id ='location' name='location' value={this.state.location} onChange= {this.handleChange}/>
                    
                    <label for='about'> About: </label>
                    <textarea id= 'about' name='about' value= {this.state.about} onChange= {this.handleChange} rows='4' cols='50'/>
                    
                    <input type= 'submit' value= 'Register Your Organization'/>
                    <p id= 'errorMessage'>{this.state.error}</p>
                </div>
            </form>
        )
    }
}
export default RegisterOrg

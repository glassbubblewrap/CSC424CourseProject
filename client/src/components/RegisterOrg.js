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

       e.preventDefault()
        fetch('http://localhost:4000/registerOrgSubmit', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name, location: this.state.location, about: this.state.about})
        })
        .then(result=> result.json())
        .then(data => {

            if(data.error){
                this.setState({...this.state, error: data.error})
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
        this.setState({ name: '', location: '',about: '' ,error:''})    
    }

    render(){

        return(
            <form onSubmit = {this.handleSubmit} method="POST">
                <div className="formcontent">   
                
                    <label htmlFor='name'> Organization Name: </label>
                    <input type='text' id ='name' name='name' value={this.state.name} onChange= {this.handleChange} required/>
                
                    <label htmlFor='location'> Location: </label>
                    <input type='text' id ='location' name='location' value={this.state.location} onChange= {this.handleChange}/>
                    
                    <label htmlFor='about'> About: </label>
                    <textarea id= 'about' name='about' value= {this.state.about} onChange= {this.handleChange} rows='4' cols='50'/>
                    
                    <input type= 'submit' value= 'Register Your Organization'/>
                    <p id= 'errorMessage'>{this.state.error}</p>
                </div>
            </form>
        )
    }
}
export default RegisterOrg

import React from 'react'

class OrgAnnouncements extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id, isOrgLeader: true, formShown: false, title: '', content: '', error:''}
        this.toggleform = this.toggleform.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleform(){

        this.setState({...this.state, formShown: !this.state.formShown})

    }

    submitForm(e){
        e.preventDefault()
        fetch('http://localhost:4000/onAnnouncementSubmit', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id: this.state.org_id, title: this.state.title, content: this.state.content})
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                this.setState({...this.state,error: data.error})
            }else if(data.success){
                this.setState({...this.state, success: data.success})
            }
        })


    }

    handleChange(e){
        //Used when characters are typed into the input field
            this.setState({
              ...this.state,
              [e.target.name]:  e.target.value
            });
        }

    render(){

        let AddAnnouncementButton

        if (this.state.isOrgLeader){
            AddAnnouncementButton = <button onClick= {this.toggleform}>Add Announcement</button>
        }
        else{
            AddAnnouncementButton = <div></div>
        }

        let addAnnouncementForm
        if (this.state.formShown){
            addAnnouncementForm = (
                <form onSubmit = {this.submitForm}>
                    <label htmlFor= 'title'> Title</label>
                    <input onChange={this.handleChange} value={this.state.title} type= 'text' id= 'title' name= 'title' required/>
                
                    <label htmlFor= 'content'> Content</label>
                    <input onChange={this.handleChange} value= {this.state.content} type= 'text' id= 'content' name= 'content' required/>

                    <input type= 'submit' value = 'Submit' />

                    <p>{this.state.error}</p>
                    <p>{this.state.success}</p>

                </form>
            )
        }
        else{
            addAnnouncementForm = <div></div>
        }

    return(
        <div>
            <h1> {this.state.org_id}</h1>
            <h1>Your Orgs announcements</h1>
            {AddAnnouncementButton}
            {addAnnouncementForm}
        </div>

    )
    }





}
export default OrgAnnouncements
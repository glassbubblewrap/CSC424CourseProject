import React from 'react'

class OrgEvents extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id, showForm: false}
        this.toggleForm = this.toggleForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){

        //fetch the events for this org using the id and save them to the state
        //Also check if the current user is in the org with the given id and their status in the org
        //fetch('http://localhost:4000')
    }

    toggleForm(){

        this.setState({...this.state, showForm : !this.state.showForm})
    }

    submitForm(e){
        e.preventDefault()
        fetch('http://localhost:4000/onEventSubmit', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.org_id, 
                name: this.state.name, 
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                this.setState({...this.state, error: data.error})
            }
            else if(data.success){
                this.setState({...this.state, success: data.success})
            }
        })
    }

    handleChange(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    
    render(){

        let AddEventButton

            AddEventButton = <button onClick= {this.toggleForm}>Add an Event</button>

            let EventForm
            if(this.state.showForm){

                EventForm = (
                <form onSubmit = {this.submitForm}>

                    <label htmlFor= 'eventName'> Event Name</label>
                    <input onChange={this.handleChange} type= 'text' id= 'eventName' name= 'name' required/>

                    <label htmlFor= 'eventDate'> Event Date</label>
                    <input onChange={this.handleChange} type= 'Date' id= 'eventDate' name= 'date' required/>

                    <label htmlFor= 'eventDate'> Event Time</label>
                    <input onChange={this.handleChange} type= 'text' id= 'eventTime' name= 'time' required/>

                    <label htmlFor= 'eventLocation'>Location </label>
                    <input onChange={this.handleChange} type= 'text' id= 'eventLocation' name= 'location' required/>

                    <label htmlFor= 'eventDescription'>Description</label>
                    <input onChange={this.handleChange} type='text' id='eventDescription' name='description' />

                    <input type= 'submit' value = 'Add Event' />

                    <p>{this.state.error}</p>
                    <p>{this.state.success}</p>

                </form>
                )
            }else{

                EventForm = <div></div>
            }

        return(
            <div>
                <p> Events</p>
                {AddEventButton}
                {EventForm}
            </div>

        )
    }
}
export default OrgEvents
import React from 'react'
import '../App.css'
import Event from './Event'

class OrgEvents extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id, events: this.props.events, isOrgLeader: true, formShown: false, name: '', address: '', date: '', time: '', description: ''}
        this.toggleform = this.toggleform.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleform(){

        this.setState({...this.state, formShown:!this.state.formShown})

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
                let newEvent = this.state.events.concat({name: this.state.name, address: this.state.address, date: this.state.date, time: this.state.time, discription: this.state.discription})
                this.setState({...this.state, events: newEvent, success: data.success})
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
        
        if (this.state.isOrgLeader){
            AddEventButton = <button onClick= {this.toggleform}>Add an Event</button>
        }
        else{
            AddEventButton = <div></div>
        }

            let EventForm
            if(this.state.formShown){

                EventForm = (
                <form onSubmit = {this.submitForm}>
                    <div className="formcontent">

                        <div className="form-group">
                            <label htmlFor= 'eventName'> Event Name</label>
                            <input className="form-control" onChange={this.handleChange} type= 'text' id= 'eventName' name= 'name' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor= 'eventDate'> Event Date</label>
                            <input className="form-control" onChange={this.handleChange} type= 'Date' id= 'eventDate' name= 'date' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor= 'eventDate'> Event Time</label>
                            <input className="form-control" onChange={this.handleChange} type= 'text' id= 'eventTime' name= 'time' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor= 'eventAddress'>Address </label>
                            <input className="form-control" onChange={this.handleChange} type= 'text' id= 'eventAddress' name= 'address' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor= 'eventDescription'>Description</label>
                            <input className="form-control" onChange={this.handleChange} type='text' id='eventDescription' name='description' />
                        </div>

                        <input className="btn btn-primary" type= 'submit' value = 'Add Event' />

                        <p>{this.state.error}</p>
                        <p>{this.state.success}</p>

                    </div>

                </form>
                )
            }else{

                EventForm = <div></div>
            }

        return(
            <div>
                <h1> Events</h1>

                {this.state.events.map((event) => (

                    <div key= {event.name}>
                    <Event event={event}/>
                    </div>
                ))}

                {AddEventButton}
                {EventForm}

            </div>

        )
    }
}
export default OrgEvents
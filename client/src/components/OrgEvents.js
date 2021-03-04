import React from 'react'

class OrgEvents extends React.Component{

    constructor(props){
        super(props)
        this.state ={org_id: this.props.org_id, showForm: false}
        this.toggleForm = this.toggleForm.bind(this)
    }

    componentDidMount(){

        //fetch the events for this org using the id and save them to the state
        //Also check if the current user is in the org with the given id and their status in the org
       // fetch('http://localhost:4000')
    }

    toggleForm(){

        this.setState({...this.state, showForm: !this.state.showForm})
    }

    
    render(){

        let AddEventButton

           
                AddEventButton = <button onClick= {this.toggleForm}>Add an Event</button>

            
            let EventForm
            if(this.state.showForm){

                EventForm = (
                <form>

                    <label htmlFor= 'eventName'> Event Name</label>
                    <input type= 'text' id= 'eventName' name= 'eventNmae' required/>

                    <label htmlFor= 'eventDate'> Event Date</label>
                    <input type= 'Date' id= 'eventDate' name= 'eventDate' required/>

                    <label htmlFor= 'eventDate'> Event Time</label>
                    <input type= 'text' id= 'eventTime' name= 'eventTime' required/>

                    <label htmlFor= 'eventLocation'>Location </label>
                    <input type= 'text' id= 'eventLocation' name= 'eventLocation' required/>

                    <input type= 'submit' value = 'Add Event' />


                </form>
                )
            }else{

                EventForm = <div></div>
            }

        return(
            <div>
                <p> here is the event data</p>
                {AddEventButton}
                {EventForm}
            </div>

        )
    }
}
export default OrgEvents
import React from 'react'


class Event extends React.Component{

    constructor(props){
        super(props)
        this.state = {event: this.props.event, showContent: false}
        this.toggleContent = this.toggleContent.bind(this)
    
    }

    
    toggleContent(){

        this.setState({...this.state, showContent: !this.state.showContent})
    }

    render(){

       

        let Content
        if(this.state.showContent){
            Content = ( 
            <div>
                <p>{this.state.event.address}</p>
                <p>{this.state.event.date}</p>
                <p>{this.state.event.time}</p>
                <p>{this.state.event.discription}</p>

            </div>
            
            )
        }else{
            Content = <div></div>
        }
        return(

            <div onClick= {this.toggleContent}>
                <h4> {this.state.event.name}</h4>
                {Content}
            </div>

        )
    }


}
export default Event
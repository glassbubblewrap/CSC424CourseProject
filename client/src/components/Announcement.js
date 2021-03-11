import React from 'react'


class Announcement extends React.Component{

    constructor(props){
        super(props)
        this.state = {announcement: this.props.announcement, showContent: false}
        this.toggleContent = this.toggleContent.bind(this)
       
    }

    
    toggleContent(){

        this.setState({...this.state, showContent: !this.state.showContent})
    }

    render(){

        let Content
        if(this.state.showContent){
            Content =  <p>{this.state.announcement.content}</p>
        }else{
            Content = <div></div>
        }
        return(

            <div onClick= {this.toggleContent}>
            <h4> {this.state.announcement.title}</h4>
            {Content}
            </div>

        )
    }


}
export default Announcement
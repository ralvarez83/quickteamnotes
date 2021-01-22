import React from "react"
import AddMessageForm from "./AddMessageForm"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class Messages extends React.Component{
    render(){
        return (
            <div>
                <AddMessageForm addFish={this.props.addMessage}/>
                
            </div>
        );
    }
}
export default Messages;
import React from "react";
import AddMessageForm from "./AddMessageForm";

class Inventory extends React.Component{
    render(){
        return(
            <div className="inventory">
                <AddMessageForm addFish={this.props.addMessage}/>
                <button onClick={this.props.loadSampleFishes}>Load sample Fishes</button>
            </div>
        );
    }
}

export default Inventory;
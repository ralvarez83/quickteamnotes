import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes'
import Fish from './Fish';
import base from '../base';
import Messages from "./Messages";
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component{

    state = {
        messages: {}
    };

    componentDidMount(){
        const {params} = this.props.match;
        this.ref = base.syncState(`${params.teamId}/messages`, {
            context:this,
            state: 'messages'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addMessage = message => {

        const messages = {...this.state.messages};
        messages[`messages${Date.now()}`] = fish;
        this.setState({messages: messages})
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Messages addMessage={this.addMessage} messages={this.state.messages} />
                        {/* <Order fishes={this.state.messages} order={this.state.order}/> */}
                        {/* <Inventory addMessage={this.addFish} loadSampleFishes={this.loadSampleFishes} /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
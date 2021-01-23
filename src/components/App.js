import React from "react";
import base from '../base';
import Notes from "./Notes";
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component{

    state = {
        notes: {}
    };

    teamId = "";

    componentDidMount(){
        const {params} = this.props.match;
        this.teamId = params.teamId;
        this.ref = base.syncState(`${params.teamId}/notes`, {
            context:this,
            state: 'notes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addNote = note => {

        const notes = {...this.state.notes};
        notes[`notes${Date.now()}`] = note;
        console.log(notes);
        this.setState({notes: notes})
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{this.teamId}</h1>
                        <Notes addNote={this.addNote} notes={this.state.notes} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
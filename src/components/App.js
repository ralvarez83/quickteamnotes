import React from "react";
import base from '../base';
import Notes from "./Notes";
import TagNotes from "./TagNotes";
import AddNoteForm from "./AddNoteForm"
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component{

    state = {
        notes: {},
        tagWord: null
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

    handleHashtagClick = tagWord =>{
        this.setState({
            tagWord: tagWord
        });
    }

    handleHashtagRemove = tagWord =>{
        this.setState({
            tagWord: null
        });
    }

    noteList = () => {
        console.log(this.state.tagWord);
        if (this.state.tagWord === null){
            return (
                <Notes notes={this.state.notes} onHashtagClick={this.handleHashtagClick} />
            );
        }
        else {
            return (
                <TagNotes notes={this.state.notes} onHashtagClick={this.handleHashtagClick} onHashtagRemove={this.handleHashtagRemove}  tagWord={this.state.tagWord} />
            );
        }
    }

    render(){
        return (
            <Container fluid>
                <Row fluid>
                    <Col className="col-6 col-sm-2"></Col>
                    <Col className="col-auto-variable width content">
                        <h1>{this.teamId}</h1>
                        <AddNoteForm addNote={this.addNote}/>
                        {this.noteList()}
                    </Col>
                    <Col className="col-6 col-sm-2"></Col>
                </Row>
            </Container>
        );
    }
}

export default App;
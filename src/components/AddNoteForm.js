import React from 'react';
import Crypto from "crypto"
import { Jumbotron, Container, Form, FormGroup, Input, Button, Row, Col, Label } from 'reactstrap';

class AddNoteForm extends React.Component{
    textRef = React.createRef();
    authorRef = React.createRef();
    importantRef = React.createRef();

    constructor(props){
        super(props);
    }

    getGravatar = name => {
        if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

        const md5 = Crypto.createHash('md5').update(name).digest('hex')
        return `https://gravatar.com/avatar/${md5}?s=20&d=retro`
    }

    createNote = event => {
        event.preventDefault();

        const note = {
            author: this.authorRef.current.value,
            text: this.textRef.current.value,
            date: new Date().toISOString(),
            gravatar: this.getGravatar(this.authorRef.current.value),
            important: this.importantRef.current.checked
        }

        this.props.addNote(note);
        event.currentTarget.reset();
    }

    render(){
        return(
            <Jumbotron fluid>
                <Container fluid>
                <p className="lead">Add a new Note.</p>
                <Form onSubmit={this.createNote}>
                    <FormGroup>
                        <Input type="textarea" name="text" placeholder="Your note" maxLength="500" innerRef={this.textRef} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="author" placeholder="Your name" innerRef={this.authorRef}  />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Button type="submit" color="success">Add</Button>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="important" innerRef={this.importantRef} />
                                        Important
                                    </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                </Container>
            </Jumbotron>
            
        );
    }

}

export default AddNoteForm;
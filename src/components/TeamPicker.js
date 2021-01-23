import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class TeamPicker extends React.Component {
    
    teamNameRef = React.createRef();



    goToTeam = (event) => {
        event.preventDefault();
        this.props.history.push(`/team/${this.teamNameRef.current.value}`)
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1 className="display-3">Welcome to Quick Team Notes!</h1>
                            <p className="lead">This is a ligth documentation app where your team will write brief summary talk.</p>
                            <hr className="my-2" />
                            <p>You have to write bellow the team name whom you want to communicate.</p>
                            <p className="lead">
                            <form onSubmit={this.goToTeam}>
                                <InputGroup>
                                    <Input 
                                        type="text" 
                                        innerRef={this.teamNameRef}
                                        required 
                                        placeholder="Team Name"
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Button type="submit" color="success">Visit Team</Button>
                                    </InputGroupAddon>
                                    
                                </InputGroup>
                            </form>
                        
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamPicker;
import React from "react"
import Note from "./Note"
import { Container, Row, Col } from 'reactstrap';


class Notes extends React.Component{


    renderNotes = () => {
        const noteKeys = Object.keys(this.props.notes).reverse();
        console.log(noteKeys.length);
        if (noteKeys.length === 0){
            return(
                <div>
                    Not notes found.
                </div>
            );
        }
        else{
            return(
                <Container flow>
                    {noteKeys.map( key => 
                            <Note 
                                key = {key}
                                index = {key}
                                noteData = {this.props.notes[key]}
                                onHashtagClick={this.props.onHashtagClick}
                            />
                        )
                    }
                </Container>
            );
        }
    }

    render(){
        return (
            <Container flow>                
                {this.renderNotes()}
            </Container>
        );
    }
}
export default Notes;
import React from "react"
import AddNoteForm from "./AddNoteForm"
import Note from "./Note"
import { Container, Alert } from 'reactstrap';


class TagNotes extends React.Component{

    renderNotes = () => {
        const noteKeys = Object.keys(this.props.notes).reverse();
        const tagWord = this.props.tagWord;
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
                    {noteKeys.map( key => {
                        if (this.props.notes[key].text.search(tagWord) !== -1){
                            return (<Note 
                                    key = {key}
                                    index = {key}
                                    noteData = {this.props.notes[key]}
                                    onHashtagClick={this.props.onHashtagClick}
                                />);
                        }
                    })
                    }
                </Container>
            );
        }
    }


    render(){
        return (
            <Container flow>
                <Alert color="success" isOpen={true} toggle={this.props.onHashtagRemove}>
                    {this.props.tagWord}
                </Alert>
                
                {this.renderNotes()}

            </Container>
        );
    }
}
export default TagNotes;
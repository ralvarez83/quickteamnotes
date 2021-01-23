import React from "react"
import { Media } from 'reactstrap';

class Note extends React.Component{

    render(){

        const note = this.props.noteData;
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
          };
        return (
            <Media className="note">
                <Media left href="#">
                    <img src={note.gravatar} height="64" width="64" />
                </Media>
                <Media body>
                    <Media heading>
                        {note.text}
                    </Media>
                    {note.author} - {new Intl.DateTimeFormat('default', options).format(new Date(note.date))}
                </Media>
            </Media>
        );
    }

}

export default Note;
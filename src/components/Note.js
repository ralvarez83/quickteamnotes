import React from "react"
import { Media } from 'reactstrap';
import ReactHashtag from "react-hashtag";

class Note extends React.Component{

    handleHashtagClick = (val) => {
        this.props.onHashtagClick(val);
    }

    render(){

        const note = this.props.noteData;
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
          };
        const className = "note " + (note.important? "important": ""); 
        return (
            <Media className={className}>
                <Media left href="#">
                    <img src={note.gravatar} height="64" width="64" />
                </Media>
                <Media body>
                    <Media heading>
                        <ReactHashtag onHashtagClick={this.handleHashtagClick}>{note.text}</ReactHashtag>
                    </Media>
                    {note.author} - {new Intl.DateTimeFormat('default', options).format(new Date(note.date))}
                </Media>
            </Media>
        );
    }

}

export default Note;
import React from 'react';
import { getFunName } from '../helpers';

class TeamPicker extends React.Component {
    
    teamName = React.createRef();



    goToTeam = (event) => {
        event.preventDefault();
        this.props.history.push(`/team/${this.teamName.current.value}`)
    }

    render(){
        return (
            <form className="team-selector" onSubmit={this.goToTeam}>
                <h2>Please Enter a Team Name</h2>
                <input 
                    type="text" 
                    ref={this.teamName}
                    required 
                    placeholder="Team Name"
                />
                <button type="submit">visit Team</button>
            </form>
        )
    }
}

export default TeamPicker;
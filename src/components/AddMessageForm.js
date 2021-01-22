import React from 'react';

class AddMessageForm extends React.Component{
    textRef = React.createRef();
    authorRef = React.createRef();
    dateRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        const message = {
            author: this.authorRef.current.value,
            textRef: this.textRef.current.value,
            date: this.dateRef.current.value
        }

        this.props.addMessage(message);
        event.currentTarget.reset();
    }

    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="author" ref={this.authorRef} placeholder="Your name"/>
                <select ref={this.statusRef} name="status">
                    <option value="avalible">Fresh</option>
                    <option value="unavalible">Soul out!</option>
                </select>
                <textarea ref={this.textRef} name="text" placeholder="Your message" maxLength="500"></textarea>
                <input type="date" name="date" ref={this.dateRef} placeholder="Date" />
                <button type="submit"> + Add</button>
            </form>
        );
    }

}

export default AddMessageForm;
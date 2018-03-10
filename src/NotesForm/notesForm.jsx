import React, { Component } from 'react';
import './notesForm.css';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When user inputs, set newNoteContent
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(){

        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent: '',
        })
    }


    render(){
        return(
            <form>
                <div className="form-row mt-5 mb-3">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-8 col-sm-12">
                        <input className="form-control form-control-lg"
                               placeholder="Write a new note..."
                               value={this.state.newNoteContent}
                               onChange={this.handleUserInput}/>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <button className="btn btn-info btn-lg btn-block" onClick={this.writeNote}>Add Note</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default NoteForm;
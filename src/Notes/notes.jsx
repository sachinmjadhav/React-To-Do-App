import React, { Component } from 'react';
import './notes.css';
import PropTypes from 'prop-types';

class Note extends  Component {

    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="row mt-2">
                <div className="col-md-3"></div>
                <div className="col-md-6 bg-light border border-warning text-dark font-weight-bold">
                    <div className="">
                        <span className="closebtn"
                              onClick={() => this.handleRemoveNote(this.noteId)}>
                            &times;
                        </span>
                        <p className="display-4 text-center justify-content-center">{ this.noteContent }</p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
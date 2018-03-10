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
                <div className="col-md-3 col-sm-2"></div>
                <div className="col-md-6 col-sm-8 bg-light border border-warning text-dark font-weight-bold">
                    <div className="">
                        <span className="closebtn"
                              onClick={() => this.handleRemoveNote(this.noteId)}>
                            &times;
                        </span>
                        <h2 className="text-center align-content-center">{ this.noteContent }</h2>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2"></div>
            </div>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
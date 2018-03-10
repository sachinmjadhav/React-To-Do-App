import React, { Component } from 'react';
import './App.css';
import Note from './Notes/notes';
import NoteForm from './NotesForm/notesForm';
import { DB_CONFIG } from "./Config/config";
import firebase from 'firebase/app';
import 'firebase/database';


class App extends Component {
  constructor(props) {
      super(props);
      this.addNote= this.addNote.bind(this);
      this.removeNote = this.removeNote.bind(this);

      this.app = firebase.initializeApp(DB_CONFIG);
      this.database = this.app.database().ref().child('notes');

      // Setup react state of our component
      this.state = {
          notes: [],
      }
  }

  componentWillMount(){
      const previousNote = this.state.notes;

      // DataSnapshot
      this.database.on('child_added', snap => {
          previousNote.push({
              id: snap.key,
              noteContent: snap.val().noteContent,
          })

          this.setState({
              notes: previousNote
          })
      })

      this.database.on('child_removed', snap => {
          for (let i = 0; i < previousNote.length; i++){
              if(previousNote[i].id === snap.key){
                  previousNote.splice(i, 1);
              }
          }

          this.setState({
              notes: previousNote
          })
      })
  }

    addNote(note){
      this.database.push().set({ noteContent: note });
    }

    removeNote(noteId){
      this.database.child(noteId).remove();
    }


    render() {
    return (
        <div className="container">
            <div className="row display-2 text-center mt-2">
                <div className="col">
                    <div className="text-white">React and Firebase To-Do List</div>
                </div>
            </div>
            <div>
                <NoteForm addNote={this.addNote}/>
            </div>
            <div className="row">
                <div className="col">
                    {
                        this.state.notes.map((note) => {
                            return (
                                <Note noteContent = {note.noteContent}
                                      noteId = {note.id}
                                      key = {note.id}
                                      removeNote = { this.removeNote }
                                />
                            );
                        })

                    }
                </div>
            </div>
        </div>
    );
  }
}

export default App;

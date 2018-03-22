'use strict';


import uuid from 'uuid/v1';
import React from 'react';


import NoteForm from '../note-form-container/index.js';
import './_dashboard-container.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  butt() {
    console.log('big bootylicious');
  } 

  render() {
    return (
      <div className='dashboard-container'>
        <NoteForm handleAddNote={this.butt}/>
      </div>  
    )
  }
}

export default Dashboard
'use strict';

import React from 'react';

import './_note-form-container.scss';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name='title'
        type='text'
        value={this.state.title}
        onChange={this.handleChange}
      />

        <input
          name='content'
          type='text'
          value={this.state.price}
          onChange={this.handleChange}
          />
          <button type='submit'>Add</button>
      </form>      

    )
  }
}

export default NoteForm;
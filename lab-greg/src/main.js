'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './component/dashboard-container/index.js';
import Dashboard from './component/landing-container/index.js';
import NoteForm from './component/note-form-container/index.js'

class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        note: []
      }
      this.getApp = this.getApp.bind(this);
    }
    
    getApp() {
      return {
        state: this.state,
        setState: this.setState.bind(this)
      }
    }
    componentDidUpdate() {
      console.log('__STATE__', this.state);
    }

    render() {
      return (
        <div>
          <NoteForm />
        </div>  
      )    
    }
  }

  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <main>
          <div>
            <p>oH hElL0!</p>
          </div>  
          {/* <BrowserRouter>
            <section>  
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
            </section>
          </BrowserRouter> */}
        </main>
      )
    }
  }

  ReactDom.render(<App />, document.getElementById('root'));

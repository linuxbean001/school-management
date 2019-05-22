import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import Resources from './components/resources/Resources';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Dashboard} /> 
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/resources' component={Resources} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

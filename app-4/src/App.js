import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.stateUpdate = this.stateUpdate.bind(this)
    this.clearValues = this.clearValues.bind(this)
  }
  stateUpdate(val, prop){
    this.setState({[prop]: val})
  }
  clearValues(){
    this.setState({
      username: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        <Login 
        clear={this.clearValues}
        update={this.stateUpdate}
        user={this.state.username}
        pass={this.state.password}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      array: ['things', 'and', 'stuff', 'and', 'whatnot']
    }
  }
  render() { 
    return ( 
      <div className="App">
        <ul>
          {this.state.array.map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
      </div>
     );
  }
}
 
export default App;

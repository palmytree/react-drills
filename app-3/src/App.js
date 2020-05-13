import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: '',
      array: ['things', 'and', 'stuff', 'and', 'what', 'not']
     }
  }
  updateFilter(val){
    this.setState({
      filter: val
    })
  }
  render() { 
    return (  
      <div className="App">
        <input type="text"
        onChange={e => this.updateFilter(e.target.value)}
        />
        <div className="list-container">
          {this.state.array.filter(w => w.includes(this.state.filter)).map((w, i) => <h2 key={i}>{w}</h2>)}
        </div>
      </div>
    );
  }
}
 
export default App;
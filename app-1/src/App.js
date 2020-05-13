import React, { Component } from 'react';
import './App.css'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}
	updateText(val) {
		this.setState({
			text: val,
		});
	}
	render() {
		return (
			<div className="App">
				<input style={{width: '50%', textAlign: 'center'}} type='text' onChange={e => this.updateText(e.target.value)} />
				<span className='display-text'>{this.state.text}</span>
			</div>
		);
	}
}

export default App;

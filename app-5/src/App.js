import React, { Component } from 'react';
import Image from './components/Image';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: 'https://via.placeholder.com/500',
		};
	}
	updateImg(val) {
		this.setState({
			img: val,
		});
	}
	reset() {
		this.setState({
			img: 'https://via.placeholder.com/500',
		});
	}
	render() {
		return (
			<div className='App'>
				<input
					type='text'
					placeholder='Enter URL to change img'
					onChange={e => this.updateImg(e.target.value)}
					value={this.state.img}
				/>
				<button onClick={() => this.reset()}>Reset</button>
				<Image img={this.state.img} />
			</div>
		);
	}
}

export default App;

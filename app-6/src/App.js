import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			list: [],
		};
	}
	listAdd(item) {
		if (!item) return;
		this.setState({
			list: [
				...this.state.list,
				<Todo item={item} key={this.state.list.length} />,
			],
			input: '',
		});
	}
	updateItem(value) {
		this.setState({ input: value });
	}
	render() {
		return (
			<div className='App'>
				<h2>My to-do list:</h2>
				<input
					type='text'
					onChange={e => this.updateItem(e.target.value)}
					value={this.state.input}
				/>
				<button onClick={() => this.listAdd(this.state.input)}>Add</button>
				<div>{this.state.list}</div>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import NewTask from './components/NewTask';
import List from './components/List';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			input: '',
		};
		this.listAdd = this.listAdd.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}
	listAdd() {
		const { input, list } = this.state;
		this.setState({
			list: [...list, input],
			input: '',
		});
	}
	updateInput(val) {
		this.setState({ input: val });
	}
	render() {
    const list = this.state.list.map((e, i) => <Todo item={e} key={i} />)
		return (
			<div className='App'>
				<h2>My to-do list:</h2>
				<input type='text' onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
				<NewTask 
        add={this.listAdd}
        />
				<List 
        list={list}
        />
			</div>
		);
	}
}

export default App;

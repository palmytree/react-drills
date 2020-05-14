import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AutoComplete from './components/AutoComplete';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: { sprites: '' },
			input: '',
			options: [],
		};
	}
	componentDidMount() {
		axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(response => {
			this.setState({ pokemon: response.data });
		});
	}
	updateNewPokemon(val) {
		this.setState({
			input: val,
		});
	}
	async search() {
		const { input } = this.state;
		let res;
		try {
			res = await axios.get(
				'https://pokeapi.co/api/v2/pokemon/' + input.toLowerCase()
			);
		} catch (err) {
			console.error('Error response');
			console.error(err.response.status);
			alert('Pokemon not found, please try again');
			this.setState({ input: '' });
		} finally {
			if (res) {
				this.setState({
					pokemon: res.data,
					input: '',
				});
			}
		}
	}
	render() {
		return (
			<div className='App'>
				<input
					value={this.state.input}
					placeholder='Type to change...'
					type='text'
					onChange={e => this.updateNewPokemon(e.target.value)}
				/>
				<AutoComplete />
				<button onClick={() => this.search()}>Submit</button>
				<img src={this.state.pokemon.sprites.front_default} alt='' />
				<img src={this.state.pokemon.sprites.back_default} alt='' />
				<p>
					<b>Name:</b> {this.state.pokemon.name}
				</p>
				<p>
					<b>Number:</b> {this.state.pokemon.id}
				</p>
				<p>
					<b>Height:</b> {this.state.pokemon.height}
				</p>
				<p>
					<b>Weight:</b> {this.state.pokemon.weight}
				</p>
			</div>
		);
	}
}

export default App;

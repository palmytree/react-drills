import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div>
				<input
					type='text'
					id='username'
					onChange={e => this.props.update(e.target.value, 'username')}
					value={this.props.user}
				/>
				<input
					type='password'
					id='password'
					onChange={e => this.props.update(e.target.value, 'password')}
					value={this.props.pass}
				/>
				<button
					onClick={e => {
						alert(`Username: ${this.props.user} Password: ${this.props.pass}`);
						this.props.clear();
					}}>
					Login
				</button>
			</div>
		);
	}
}

export default Login;

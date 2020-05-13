import React, { Component } from 'react';

class Todo extends Component {
    render() { 
        return <h3>{this.props.item}</h3>;
    }
}
 
export default Todo;
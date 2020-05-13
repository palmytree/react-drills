import React, { Component } from 'react';

class NewTask extends Component {
    render() { 
        return (
            <button
            onClick={() => this.props.add()}
            >Add</button>
        )
    }
}
 
export default NewTask;
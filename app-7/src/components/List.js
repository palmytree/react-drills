import React, { Component } from 'react';

class List extends Component {
    render() { 
        return (  
            <div className="listContainer">
                {this.props.list}
            </div>
        );
    }
}
 
export default List;
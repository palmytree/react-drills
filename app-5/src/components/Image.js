import React, { Component } from 'react';

class Image extends Component {
    render() { 
        return ( 
            <img src={this.props.img} alt="A placeholder"/>
         );
    }
}
 
export default Image;
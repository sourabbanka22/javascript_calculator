import React from 'react';
import './Screen.css';

class Screen extends React.Component{
    render(){
        return(
        <div class="screen" id={this.props.id}>
            <div class="currentValue">{this.props.currentString}</div>
        </div>
        )
    }
}

export default Screen;
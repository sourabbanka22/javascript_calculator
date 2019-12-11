import React from 'react';
import './Button.css';

class Button extends React.Component{
    parentHandleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render(){
        return(
                <div id={this.props.id} onClick={this.parentHandleClick} className="button">
                    {this.props.name}
                </div>
        )
    }
}

export default Button;
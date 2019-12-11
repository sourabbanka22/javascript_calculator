import React from 'react';
import './ButtonO.css';

class ButtonO extends React.Component{
    parentHandleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render(){
        return(
                <div id={this.props.id} onClick={this.parentHandleClick} className="buttono">
                    {this.props.name}
                </div>
        )
    }
}

export default ButtonO;
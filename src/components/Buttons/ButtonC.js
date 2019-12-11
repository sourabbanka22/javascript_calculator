import React from 'react';
import './ButtonC.css';

class ButtonC extends React.Component{
    parentHandleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render(){
        return(
                <div id={this.props.id} onClick={this.parentHandleClick} className="buttonc">
                    {this.props.name}
                </div>
        )
    }
}

export default ButtonC;
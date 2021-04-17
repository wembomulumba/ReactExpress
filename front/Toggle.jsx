import React, { Component } from 'react'

export class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    } 

    


    render() {
        return (
            <div>
                
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button> 

            </div>
        )
    }
}

export default Toggle

import React, { Component } from 'react';
import Marks from './Marks';

export default class student extends Component {
    constructor(){
        super();
        this.state = {
            roll: 101

        };

    }
   clickHandle = () => {
       console.log("Button Clicked");
       this.setState({roll: this.state.roll + 2});
   };

    render() {
        console.log("Student Rendered");
        return (
            <div>
                <Marks roll={this.state.roll}/>
                <button onClick={this.clickHandle}>change</button>
            </div>
        )
    }
}

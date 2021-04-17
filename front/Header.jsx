import React, { Component } from 'react'
import ReactDom from 'react-dom';

const headertit ='Task Tracker System';


function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDom.render(
      element,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
export class Header extends Component {
    render() {
        return (
            <myHeader>
                <h1>{headertit}</h1>
                <button className='btn'>Load File</button>   
                
                

                <div id="root">
                </div>

            </myHeader>
            
        )
    }
}
export default Header

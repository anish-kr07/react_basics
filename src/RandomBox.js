import React from 'react';
import Box from './Box';

export default class randomBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter: 0};
    this.go = this.go.bind(this);
  }

  go(){
      let start = +this.num.value;
      this.setState({counter: start});
     }
  getColors(){
    let r = Math.floor(Math.random() * 256);
    let g =Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();
    return {r,g,b,a};
  }

render(){
    return (
      <div className="randomBox">
        <h1>RandomBoxes</h1>
        <div className="controls">
          <input ref={node => this.num = node} type="text" />
          <button onClick={this.go}>Go!</button>
        </div>
        <div>
            {
             Array(this.state.counter).fill(null).map((_, i) =>{
            return <Box key={i} colors={this.getColors()} />;
            })
            }
       </div>
      </div>
    );
  }
}
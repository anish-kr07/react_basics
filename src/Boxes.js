import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
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
      <div>
        <h1>Boxes</h1>
        {
          Array(3).fill(null).map((_, i) =>{
            return <Box key={i} colors={this.getColors()} />;
          })
        }
      </div>
    );
  }
}
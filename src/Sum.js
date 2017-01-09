//This is a stateless component

import React from 'react';

export default (props) => {
    //let x = 3;..This is wrong, you can't put a statemnt in an expression
      let sum = props.a + props.b;
   return (
       <div>
        <h1> Sum </h1>
        <p>
            {props.a} + {props.b} = {sum} 
        </p>
    </div>

   ); 
};
//This is a stateless component

import React from 'react';

export default (props) => {
    //let x = 3;..This is wrong, you can't put a statemnt in an expression
      let sum =  props.num.reduce((acc, c) => acc + c , 0);  
   return (
       <div>
        <h1> Sum </h1>
        <p> 
           {props.num} = {sum}      
        </p>
    </div>

   ); 
};
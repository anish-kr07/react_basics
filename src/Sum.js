//This is a stateless component

import React from 'react';

export default (props) => {
    //let x = 3;..This is wrong, you can't put a statemnt in an expression
      let sum =  props.num.reduce((acc, cur) => acc + cur , 0);  
   return (
       <div>
        <h1> Sum </h1> 
           <ul>
            {
                props.num.map((num,index) => <li key={index}> {num} </li>)
            }
           </ul>
            {sum}      
    </div>

   ); 
};
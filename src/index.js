import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import './index.css';
import Sum from './Sum'

ReactDOM.render(
  <div>
  <Sum num={[3,5,7]}/>
  </div>,
  document.getElementById('root')
  
);

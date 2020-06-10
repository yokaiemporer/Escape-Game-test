import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dotsu from "./Dotsu"
import RenderArrow from "./Arrow"
import Puz5 from "./Puz5"
import Test1 from "./Test1"
import Puz4 from "./Puz4"
import Puz6 from "./Puz6"
import Puz7 from "./Puz7"
import Pattern from "./Pattern"
ReactDOM.render(
  <React.StrictMode>
    <div style={{height:"500px",width:"500px"}}>
    <Puz7 />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

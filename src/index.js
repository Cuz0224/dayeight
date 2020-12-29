import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import App from "./App";
import { HashRouter } from "react-router-dom";

// class Index extends React.Component{
//   render(){
//     return(
//       <div>
//         <App />
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
,document.getElementById('root'));

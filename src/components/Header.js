import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import Home from '../containers/Home';


export default class Header extends Component {
  render() {
    return (
      <div>
      
       <div>
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               </ul>
          
               
      </div>
          
      </div>
    )
  }
}

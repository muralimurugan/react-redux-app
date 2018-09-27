import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Nomatch from './components/Nomatch';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
  console.log(this.props);
    return (
      <Router>
      <div className="App">
       <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* <Route component={Nomatch} /> */}
      </div>
      </Router>
    );
  }
}

export default App;

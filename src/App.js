import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";

//components
import Navbar from "./components/Navbar";





class App extends Component{
  state = {

  }


    

  render() {

   
  return (
    <Router>
      <div className="App">
        <Navbar/>

      </div>

      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/articles" component={Articles} />

   


    </Router>
  );
}
}


export default App;

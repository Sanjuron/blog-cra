import React, { Component } from 'react';
import {NavLink} from "react-router-dom"; 


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <NavLink exact to="/" className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/services" className="navbar-item">
        Services
      </NavLink>
      <NavLink to="/articles" className="navbar-item">
        Articles
      </NavLink>
      <NavLink to="/contact" className="navbar-item">
        Contact
      </NavLink>
    </div>
  </div>
</nav>
        );
     }
}
export default Navbar;
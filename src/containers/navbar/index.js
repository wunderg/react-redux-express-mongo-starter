import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.scss';

class Navbar extends Component {

  componentDidMount() {
    $(function() {
      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });
    });
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={`/`} className="brand-logo">Starter</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="fa fa-align-justify"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to={'/add'}>Add</Link></li>
            <li><Link to={'/'}>Dashboard</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/faq'}>Login</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to={'/add'}>Add Student</Link></li>
            <li><a href="">Results</a></li>
            <li><Link to={'/'}>Dashboard</Link></li>
            <li><Link to={'/guide'}>Guide</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

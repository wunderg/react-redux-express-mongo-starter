import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './style.scss';

class Navbar extends Component {

  componentDidMount() {
    if (!window.ENV_TEST) {
      $(function () {
        $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'right', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
      });
    }
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <nav>
          <div className="nav-wrapper">
            <Link to={`/`} className="brand-logo">PTC Portal</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="fa fa-align-justify"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><Link to={'/login'}>Sign In</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to={'/login'}>Sign In</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      );
    }
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={`/`} className="brand-logo">PTC Portal</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="fa fa-align-justify"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to={'/add'}>Add Student</Link></li>
            <li><Link to={'/results'}>Results</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/guide'}>Guide</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li className="logout" onClick={this.props.logout}><Link to={''}>Logout</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to={'/add'}>Add Student</Link></li>
            <li><Link to={'/results'}>Results</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/guide'}>Guide</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li onClick={this.props.logout}><Link to={''}>Loqout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default Navbar;

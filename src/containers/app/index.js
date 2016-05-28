import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar';
import Spinner from '../../helpers/spinner.js';
import '../../../global.scss';

import { loginWithToken, logout, fetchStudents } from '../../actions/login.js';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = window.localStorage.getItem('id_token');
    if (!this.props.user.isAuthenticated && token) {
      this.props.loginWithToken(token);
    }
  }

  render() {
    if (this.props.user.isFetching) {
      return <Spinner />;
    }

    return (
      <div id="main">
        <div className="main-wrap">
          <Navbar isAuthenticated={this.props.user.isAuthenticated} logout={this.props.logout} />
          <div className="container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  logout: PropTypes.func,
  user: PropTypes.object,
  loginWithToken: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.slocal,
    user: state.user
  };
}


export default connect(mapStateToProps, { loginWithToken, logout, fetchStudents })(App);

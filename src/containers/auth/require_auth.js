import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function(ComponentToCompose) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComponentToCompose {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.isAuthenticated }
  }

  return connect(mapStateToProps)(Authentication);
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, updateData } from '../../actions';

import Spinner from '../../helpers/spinner.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.props.fetchData();
    }
  }


  render() {
    if (this.props.data.isFetching) {
      return <Spinner />;
    }
    return (
      <div className="row">
        <div className="col s12">
          Hello world
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    data: state.main,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, updateData }, dispatch);
}

Dashboard.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object,
  fetchData: PropTypes.func,
  updateData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="row">
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {}, dispatch);
}

Home.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component, PropTypes } from 'react';
import Info from './info';
import Notes from './notes';
import Sessions from './sessions';
import Ratings from './ratings';
import { connect } from 'react-redux';
import { updateStudent } from '../../actions/index.js';
import './style.scss';

class Student extends Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });

      $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
      });
    });
  }


  render() {
    return (
      <div className="row student-row">
        <Info updateStudent={this.props.updateStudent} data={this.props.student}/>
        <Ratings updateStudent={this.props.updateStudent} data={this.props.student} />
        <Notes updateStudent={this.props.updateStudent} data={this.props.student} />
        <Sessions updateStudent={this.props.updateStudent} data={this.props.student} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    student: state.slocal.selectedStudent,
    students: state.slocal.students,
    user: state.user
  };
}

Student.propTypes = {
  student: PropTypes.object,
  updateStudent: PropTypes.func
};

export default connect(mapStateToProps, { updateStudent })(Student);

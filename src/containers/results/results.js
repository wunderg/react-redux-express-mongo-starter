import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mainData, getTotal  } from './processData.js';
import './style.scss';

import Rows from './rows.js';

export class Results extends Component {
  render() {
    const total = getTotal(this.props.students);
    const instructors = mainData(this.props.students);
    return (
      <div className="row">
        <div className="col s12">

          <table className="highlight results-table">
            <thead>
              <tr>
                <th data-field="id">Instructor Name</th>
                <th data-field="name">Students Now</th>
                <th data-field="price">Students Accepted</th>
                <th data-field="price">Will complete in two weeks</th>
              </tr>
            </thead>

            <tbody>
              {instructors.map((item, index) => <Rows instructor={item} key={index} /> )}
              <tr className="last-row">
                <td>Total</td>
                <td>{total.pending}</td>
                <td>{total.accepted}</td>
                <td>{total.will}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.slocal.source
  };
}

export default connect(mapStateToProps)(Results);

import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { array, multiply, each, useMult, reject, reduce, map, filterUsingReduce, numberOfWins, defaultProps } from './code/mock.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Mock Interview</h3>
      <hr />
      <div className="card">
        <div className="card-content">
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create an array with Object that has your name, string of your name, and the number 5</span></h5>
            <Highlight props={array} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create function multiply that multiples a number by 2</span></h5>
            <Highlight props={multiply} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Use multiply func to multiply third value in array above</span></h5>
            <Highlight props={useMult} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create each function that can work on objects, arrays and strings</span></h5>
            <Highlight props={each} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create reject function using each</span></h5>
            <Highlight props={reject} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create reduce function using each</span></h5>
            <Highlight props={reduce} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create map using reduce</span></h5>
            <Highlight props={map} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Debug filter that uses reduce inside</span></h5>
            <Highlight props={filterUsingReduce} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create numberOfWins function using reduce</span></h5>
            <Highlight props={numberOfWins} />
          </div>
          <div className="code">
            <h5><i className="fa fa-check green-text text-lighten-2"></i><span> Create default function using reduce and each</span></h5>
            <Highlight props={defaultProps} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

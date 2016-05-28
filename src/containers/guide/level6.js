import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { objectProps, objectPropsExample, objectPropsSolution, eachModified, reduceModified } from './code/objectProps.js';
import { indexOf, indexOfExample, indexOfSolution, eachModifiedIndex, reduceModifiedIndex } from './code/indexOf.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 6 - ObjectProps and IndexOf using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - ObjectProps using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student how to edit each and reduce to give additional functionality to current function</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function objectProps</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={objectProps} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={objectPropsExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - IndexOf using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student how to edit each and reduce to give additional functionality</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function indexOf</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={indexOf} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={indexOfExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

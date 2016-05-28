import React from 'react';
import Highlight from '../../helpers/highlight.js';
import {each, reduce, contains, containsExample, containsSolution } from './code/contains.js';
import { every, everyExample, everySolution } from './code/every.js';

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 5 - Contains and Every using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Contains Using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> NOTE: During this level we are going to test student understanding of inner working of each and reduce by switching arguments names for EACH and REDUCE for - 'a', 'b', 'c' and so forth for all following function arguments, see a boilerplate below</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Contains </span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Each and Reduce Boilerplate</b></h5>
              <Highlight props={each} />
              <Highlight props={reduce} />
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={contains} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={containsExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Every Using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write Every using Reduce </span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Every </span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={every} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={everyExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

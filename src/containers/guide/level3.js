import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { getMax, getMaxExample, getMaxSolution } from './code/getMax.js';
import { sum, sumExample, sumSolution } from './code/sum.js';


export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 3 - Sum and GetMax using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Sum</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write basic sum function using reduce</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function sum</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={sum} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={sumExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - GetMax</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write basic getMax function</span></li>

                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function getMax</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={getMax} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={getMaxExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

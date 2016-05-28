import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { filter, filterExample, filterSolution } from './code/filter.js';
import { reduce, reduceExample, reduceSolution } from './code/reduce.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 2 - Filter and Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Filter</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach what is the predicate function</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function filter</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={filter} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={filterExample} />
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2 green-text text-lighten-2"></i><span> Teach how to use 'Each' to create Reduce function</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function reduce</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={reduce} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={reduceExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { map, mapExample, mapUsingReduce } from './code/map.js';
import { reduceSolution, reduceUndefinedExample, reduceUndefinedSolution } from './code/reduce.js';
import { filter, filterExample, filterUsingReduce } from './code/filter.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 4 - Map And Filter Using Reduce</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Map using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write Map using Reduce</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function Map</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={map} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={mapExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Filter using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function filter</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function filer</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={filter} />
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={filterExample} />
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 3 - Advanced Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to determine when we are in the nth iteration of each</span></li>

                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Start with previous implementation of Reduce</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Example</b></h5>
              <Highlight props={reduceUndefinedExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

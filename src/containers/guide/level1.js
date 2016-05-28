import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { each, eachExample, eachSolution} from './code/each.js';
import { map, mapExample, mapSolution } from './code/map.js';

export default () => (

  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 1 - Basic Each and Map</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Each</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to distinguish between an array and/or an object</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function each</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={each} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={eachExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Map</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to use 'Each' to create 'Map' function</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create function map</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={map} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={mapExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

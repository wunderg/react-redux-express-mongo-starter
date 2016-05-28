import React from 'react';
import Highlight from '../../helpers/highlight.js';
import { hash, hashSolution, hashExample } from './code/hash.js';
import { extend, extendSolution, extendExample } from './code/extend.js';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>Level 7 - Hash Table and Extend</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 1 - Hash Table using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach student how to edit each to handle strings</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                <li><i className="fa fa-check green-text text-lighten-2"></i><span> Update each so that it handles strings</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={hash} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={hashExample} />
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Lesson 2 - Extend using Reduce</b></h4>
              <hr />
              <div className="">
                <h5><b>Objectives:</b></h5>
                <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Teach how to write extend function</span></li>
                </ul>
              </div>
              <div className="">
                <h5><b>Technical:</b></h5>
              </div>
              <ul className="prompts">
                  <li><i className="fa fa-check green-text text-lighten-2"></i><span> Create extend function</span></li>
              </ul>
            </div>
            <div className="code">
              <h5><b>Boilerplate:</b></h5>
              <Highlight props={extend} />
            </div>
            <div className="code">
              <h5><b>Example:</b></h5>
              <Highlight props={extendExample} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

import React from 'react';

export default () => (
  <div className="card deep-purple lighten-5">
    <div className="card-content">
      <h3>How To Use This Guide</h3>
      <hr />
      <ul className="lesson-list">
        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Workflow</b></h4>
              <hr />
              <div className="">
                <ul className="prompts">
                  <li>
                    <i className="fa fa-check green-text text-lighten-2"></i>
                    <span> Student has to start at Level 1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="card">
            <div className="card-content">
              <h4><b>Tips</b></h4>
              <hr />
              <div className="">
                <ul className="prompts">
                  <li>
                    <i className="fa fa-check green-text text-lighten-2"></i>
                    <span> Never give up the ANSWER to the student</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

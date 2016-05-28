import React, { Component } from 'react';
import './style.scss';

import Level0 from './howto.js';
import Level1 from './level1.js';
import Level2 from './level2.js';
import Level3 from './level3.js';
import Level4 from './level4.js';
import Level5 from './level5.js';
import Level6 from './level6.js';
import Level7 from './level7.js';
import Interview from './interview.js';

class Guide extends Component {
  componentDidMount() {
    $(function () {
      $('.scrollspy').scrollSpy();
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m9 l10">

          <div id="level0" className="section scrollspy">
            <Level0 />
          </div>

          <div id="level1" className="section scrollspy">
            <Level1 />
          </div>

          <div id="level2" className="section scrollspy">
            <Level2 />
          </div>

          <div id="level3" className="section scrollspy">
            <Level3 />
          </div>

          <div id="level4" className="section scrollspy">
            <Level5 />
          </div>

          <div id="level5" className="section scrollspy">
            <Level4 />
          </div>

          <div id="level6" className="section scrollspy">
            <Level6 />
          </div>

          <div id="level7" className="section scrollspy">
            <Level7 />
          </div>

          <div id="interview" className="section scrollspy">
            <Interview />
          </div>

        </div>
        <div className="col hide-on-small-only m3 l2">
          <ul className="section table-of-contents">
            <li><a href="#level0">Workflow</a></li>
            <li><a href="#level1">Level 1</a></li>
            <li><a href="#level2">Level 2</a></li>
            <li><a href="#level3">Level 3</a></li>
            <li><a href="#level4">Level 4</a></li>
            <li><a href="#level5">Level 5</a></li>
            <li><a href="#level6">Level 6</a></li>
            <li><a href="#level7">Level 7</a></li>
            <li><a href="#interview">Interview</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Guide;

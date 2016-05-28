import React, { Component } from 'react';
import './style.scss';
import { Initial } from './templates.js';

class Resources extends Component {
  componentDidMount(){
    $(document).ready(function (){
      $('ul.tabs').tabs();
    });
  }

  render() {
    return (
      <div className="row resource">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><h5><a href="#student">Student</a></h5></li>
            <li className="tab col s3">
              <h5><a className="active" href="#teacher">Instructor</a></h5>
            </li>
          </ul>
        </div>
        <div id="teacher" className="col s12">
          <div className="card deep-purple lighten-5">
            <div className="card-content">
              <h3>Instructor Resources</h3>
                <h5><b>Email Templates</b></h5>
              <hr />
              <div className="card-panel">
                <h5><b>Initial Contact</b></h5>
                <hr />
                <Initial />

              </div>
            </div>
          </div>
        </div>
        <div id="student" className="col s12">
          <div className="card deep-purple lighten-5">
            <div className="card-content">
              <h3>Student Resources</h3>
              <hr />
              <div className="card-panel">
                <h4><b>Books</b></h4>
                <hr />
                <p><a href="https://github.com/getify/You-Dont-Know-JS">You Don't Know JS</a></p>
                <p><a href="http://eloquentjavascript.net/">Eloquent JavaScript</a></p>
                <p><a href="http://superherojs.com/">Superhero JS</a></p>
                <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">Operator Precedence</a></p>
                <h4><b>Coding Practice</b></h4>
                <hr />
                <p><a href="http://www.codewars.com/kata/search/my-languages?q=&tags=Arrays&beta=false&order_by=rank_id+asc">Code Wars</a> - Sorted By Arrays</p>
                <p><a href="https://coderbyte.com/">CoderByte</a></p>
                <p><a href="https://www.hackerrank.com/">Hacker Rank</a></p>
                <p><a>Awesome Link By You</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;

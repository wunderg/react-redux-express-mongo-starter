import React from 'react';
import { browserHistory } from 'react-router';
import { identity } from 'lodash';

import Progress from '../../helpers/progress.js';

export default ({ student, selectStudent, updateStudent }) => {
  const message = `mailto:${student.email}?subject=Coaching By Hack Reactor&body=Hey ${student.name}
.%0D%0A%0D%0A
I'm ${student.instructor}, currently a Hacker-in-Residence at Hack Reactor Remote. I’m contacting you because you’ve enrolled in the Personal Tech Coaching program. Let’s work out a schedule and get started!
.%0D%0A%0D%0A
You can view my calendar and book times for us to meet twice a week using this link.[LINK HERE]. For your reference, we’ll meet for 45–60 minutes twice a week. We are going to use Skype for our sessions and I will contact you at time of your appoitment.
%0D%0A%0D%0A
Here's a bit more detail about the program and expectations we have have to help you unlock your skills and achieve your goals. You should be ready to commit to the following:
%0D%0A%0D%0A
1. Be prepared to put in at least 1-2 hours of practice per day doing toy problems and code challenges, practicing programming by building out a pet project, etc. This purposefully excludes watching lectures on YouTube, etc. because we want you to experience the doing of programming.
%0D%0A%0D%0A
2. Bring questions to class each time we meet so you can demonstrate what you're working on outside of class and get more out of our sessions. Ultimately, this will help you to advance more quickly.
%0D%0A%0D%0A
3. Treat this program and your time in it with respect. Show up on time having prepped and be ready to put in strong effort to learn and advance.
If you don't agree to the above, please contact remote.beta.admissions@hackreactor.com to discuss more.
%0D%0A%0D%0A
A little bit about me and what I do here: as an HiR I've been [on an engineering team, teach remote prep classes, do this coaching, help with outcomes, run a help desk, do technical interviews, etc]; I've been into tech/programming since [1967 but had been away from it for a few years - some tech background]; I like [jazz, penguins, and travel - some non-tech background].
%0D%0A%0D%0A
Using my calendar link above please book sessions (2x/week) for the coming week. Then, reply to me here if you've got any questions or scheduling concerns.
%0D%0A%0D%0A
Thank you and I'm looking forward to working with you!
`;

  const onDetailsClick = () => {
    selectStudent(student);
    browserHistory.push('/student');
  };

  const onCheckBoxClick = (e) => {
    e.preventDefault();
    student.contacted = student.contacted === '' ? 'checked' : '';
    updateStudent(student);
  };

  const levelUp = () => {
    student.level += 1;
    updateStudent(student);
  };

  return (
    <div className="student">
      <div className="card student-card">
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4" >{student.name}
              <i className="fa fa-edit right"> Contact</i></span>
            <p className="card-email">{student.email}</p>
            <hr />
            <p className=""> Inverview:<span className="right">{student.interview}</span> </p>
            <p className=""> Decision:<span className="right">{student.decision}</span> </p>
            <p className=""> Instructor:<span className="right">{student.instructor}</span> </p>
            <p className="contacted"> Contacted:
              <input type="checkbox" id="contacted" checked={student.contacted} onChange={identity} />
              <label htmlFor="contacted" className="right contacted-label" onClick={onCheckBoxClick}></label> </p>
            <span className="progress-text">Current progress: {student.lesson} of 8</span>
            <Progress className="students-progress-bar" number={student.lesson} />
            <p><a className="waves-effect waves-light btn right details" onClick={onDetailsClick}>Details</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title purple-text text-darken-5">Contact<i className="fa fa-close right"></i></span>
            <p className="action-text"> Introduction Email: <a href={message} className="waves-effect waves-light btn right">Send</a></p>
            <p className="action-text"> Reminder Email:<a className="waves-effect waves-light btn right">Send</a></p>
            <p className="action-text"> On-Hold Email:<a className="waves-effect waves-light btn right">Send</a></p>
          </div>
        </div>
      </div>
  );
};

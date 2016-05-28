import React, { Component } from 'react';
import './style.scss';

class Faq extends Component {

  render() {
    return (
      <div className="row faq">
        <div className="card deep-purple lighten-5">
          <div className="card-content">
            <h3>Frequently Asked Questions</h3>
            <hr />

            <div className="card-panel">
              <h5><b>Q: What if students don't do homework or extra work outside of class? </b></h5>
              <hr />
              <p> A: Tell the student that progress will not be sufficient for them to reinterview unless they complete work outside of the coaching sessions and that you need their commitment to accomplish the task of putting in extra time outside of class.</p>
            </div>

            <div className="card-panel">
              <h5><b>Q: What do I do with a non-responsive student? </b></h5>
              <hr />
              <p>A: If you've written 2-3x and it's been 5 business days, note in pipedrive and write to <a href='mailto:remote.beta.admissions@hackreactor.com'>remote.beta.admissions@hackreactor.com</a>. Then check the queue and ping the next student.</p>
            </div>


            <div className="card-panel">
              <h5><b>Q: My student is missing sessions, what do I do?</b></h5>
              <hr />
              <p>A: If they miss 2 sessions, give them a firm warning that you won't be able to continue with them if they miss another (not in Pipedrive and email  <a href='mailto:remote.beta.admissions@hackreactor.com'>remote.beta.admissions@hackreactor.com</a> if they miss 2+). </p>
            </div>


            <div className="card-panel">
              <h5><b>Q: Am I required to recommend a student?</b></h5>
              <hr />
              <p>A: No, if the student is not ready at the end of 10 sessions, you can tell them, note in pipedrive and notify <a href='mailto:remote.beta.admissions@hackreactor.com'>remote.beta.admissions@hackreactor.com</a></p>
            </div>


            <div className="card-panel">
              <h5><b>Q: What if the student is way off the mark?</b></h5>
              <hr />
              <p>A: Try at least 6 sessions to see how far you can get. If the progress is sufficient, try to finish out PTC with them. If it is minimal or stalled and they are FAR off, you can tell them their best next steps on how to study, etc. </p>
            </div>

            <div className="card-panel">
              <h5><b>Q: What's a good way to check for memorization? How do I prevent it?</b></h5>
              <hr />
              <p>A: Get the student to talk their way through the logic of the problem AND switch the variable nomenclature to make sure the student actually understands the steps and how to solve even when the order / naming is changed.</p>
            </div>

            <div className="card-panel">
              <h5><b>Q: What should I do if student raise any red flags - rude and agressive, lack of growth mindset, etc..?</b></h5>
              <hr />
              <p>If you have concerns about the student in terms of red flags such as memorization or inability to actually reason and logic and think like an engineer, you should address these concerns to the Admissions Manager <a mailto="josh.shaman@hackreactor.com">josh.shaman@hackreactor.com</a> prior to having the student schedule an interview.</p>
            </div>

            <div className="card-panel">
              <h5><b>Q: What should I do if I don’t hear back from a student?</b></h5>
              <hr />
              <p>A: Send a follow up email and If you still don’t hear back from a student, notify the admissions associate (now @angelinadavis) who will take over from there.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: What if my student has already been accepted to Hack Reactor?</b></h5>
              <hr />
              <p>A: Verify their acceptance on Pipedrive and with the admissions associate (@angelinadavis).  Don’t meet with a student who has been accepted.
                </p>
              <p>Note:  All admissions decision information should come from the admissions team. If a student is listed in Pipedrive as being accepted, the decision may not have been sent out to them yet.</p>
            </div>

            <div className="card-panel">
              <h5><b>Q: One of my students is looking to apply early because he is afraid of the seats filling up for the remote class. Is the class filling up something the PTC students need to worry about if they put off interviewing?</b></h5>
              <hr />
              <p>A: Our cap is high so I wouldn't worry much about that - messaging to student should be: “The greater concern is to take the interview before you are ready.”</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: One of my students has an interview scheduled too soon, what should I recommend?</b></h5>
              <hr />
              <p>A: Recommend that they do personal tech coaching first. There's no harm in them waiting until a few days before the cohort interview cutoff date. If they miss the cutoff date even, it’s better than getting locked out because they are unprepared and didn’t commit enough time to studying.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: I have a student who is currently locked out of interviewing. Can I still teach them?</b></h5>
              <hr />
              <p>A: Students who are locked out can interview before the lockout IF they do coaching and the HiR says they are good to go.  This HiR recommendation voids any project requirement, but should only be given if the student has made significant progress and is technically prepared for the interview.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: What should I do with my student who wants to interview at the beginning of coaching rather than the end?</b></h5>
              <hr />
              <p>A: One goal of the PTC program is avoid using TI time wastefully. The preference is that students would take coaching first to increase their chance of getting an accept. However; if a student is really set on taking the interview early, that is their choice. In the future, PTC will be more queue-based so a student would lose their spot in the queue and move down and have to wait longer for coaching.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: Should I encourage my students to form a study group?</b></h5>
              <hr />
              <p>A: If they are interested, group learning tends to be helpful and motivating. However, this is certainly not a requirement.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: Are students currently enrolled in “Fulcrum” eligible for PTC?</b></h5>
              <hr />
              <p>A: Students should not do both fulcrum and PTC so they should opt-out of PTC and stick with Fulcrum. Or if they just registered for Fulcrum and changed their mind (ex. same day or next day), they can try to connect with Fulcrum to see if they can get a refund. Check the student’s Pipedrive too so you can estimate their preparedness for either program.</p>
            </div>
            <div className="card-panel">
              <h5><b>Q: What responsibilities do I have once the coaching sessions end?</b></h5>
              <hr />
              <ul>
                A: If you are recommending the student interview at the end of your coaching:
                <li>- Have them sign up for an interview very soon after they are done coaching</li>
                <li>- Get the date, and then check in and track whether they are accepted.</li>
                <li>- Record metrics </li>
                <li>- Add notes to Pipedrive</li>
              </ul>
            </div>
            <div className="card-panel">
              <h4><b>Feedback and Questions</b></h4>
              <hr />
              <p>Write <a href="mailto:josh.shaman@hackreactor.com">josh.shaman@hackreactor.com</a> with any suggested revisions, feedback, and questions.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

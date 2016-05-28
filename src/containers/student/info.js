import React from 'react';
import { Input } from 'react-materialize';

export default (props) => {
  const onDateClick = () => {
    $('.datepicker').pickadate({
      selectMonths: true,
      closeOnSelect: true,
      selectYears: 15
    });

    $( ".datepicker" ).change(function(e) {
      const student = props.data;
      student.interview = e.target.value;
      props.updateStudent(student);
    });
  };

  const onDecisionClick = (e) => {
    const student = props.data;
    student.decision = e.target.value;
    props.updateStudent(student);
  };

  // <section className="action-text"> Complete Level: <a onClick={levelUp} className="waves-effect waves-light btn right">Done</a> </section>
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title"><span> {props.data.name} </span> </span>
        <hr />
        <section className="info"><span>Email:</span> <span> {props.data.email} </span></section>
        <section className="info">
          <span>Lesson:</span>
          <span> {props.data.lesson} of 8</span>
        </section>
        <section className="info"><span>Level:</span><span> {props.data.level} of 5</span></section>
        <section className="info"><span>Instructor:</span><span> {props.data.instructor} </span></section>
        <section className="info"><span>Contacted:</span>{props.data.contacted}</section>
        <div className="row">
          <section className="info col s6"><span>Decision:</span>
              <Input className="decision-input" type="select" onChange={onDecisionClick}>
                <option>{props.data.decision}</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Denied</option>
              </Input>
          </section>
          <section className="info col s6"><span>Interview:</span>
            <input
              type="text"
              className="datepicker"
              value={props.data.interview}
              onClick={onDateClick}
              onChange={onDateClick}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

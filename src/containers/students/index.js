import React, { PropTypes } from 'react';
import Card from './card.js';
import './style.scss';

const Table = (props) => (
  <div className="student-list">
    {console.log(props)}
    {props.data.students.map(student =>
      <Card
        student={student}
        selectStudent={props.selectStudent}
        key={student.name}
        updateStudent={props.updateStudent}
      />
    )}
  </div>
);

Table.propTypes = {
  data: PropTypes.object,
  students: PropTypes.array,
  selectStudent: PropTypes.func,
  updateStudent: PropTypes.func,
  saveStudentToLocalStorage: PropTypes.func
};

export default Table;

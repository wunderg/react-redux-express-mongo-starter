import axios from 'axios';
import * as ACTIONS from './constants';

export function addStudent(student) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    lesson: 0,
    level: 0,
    interview: 'not set',
    decision: 'pending',
    name: student.name,
    email: student.email
  };
  axios.post(`api/student`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_STUDENT,
    payload: data
  };
}

export function fetchStudents() {
  const request = axios.get(`api/students`);
  return {
    type: ACTIONS.FETCH_STUDENTS,
    payload: request
  };
}

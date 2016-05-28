import axios from 'axios';
import * as ACTIONS from './constants';
import moment from 'moment';

export function addStudent(student) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    lesson: 0,
    level: 0,
    interview: moment(new Date()).format('YYYY/MM/DD'),
    decision: 'Pending',
    contacted: '',
    name: student.name,
    email: student.email,
    instructor: student.instructor
  };

  axios.post(`api/student`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_STUDENT,
    payload: data
  };
}


export function selectStudent(student) {
  return {
    type: ACTIONS.SELECT_STUDENT,
    payload: student
  };
}

export function updateStudent(student) {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  axios.put(`api/student`, student, config);
  return {
    type: ACTIONS.UPDATE_STUDENT,
    payload: student
  };
}

function requestFetchStudents() {
  return {
    type: ACTIONS.FETCH_STUDENTS_REQUEST,
  };
}

function fetchStudentsSuccess(data) {
  return {
    type: ACTIONS.FETCH_STUDENTS_SUCCESS,
    data
  };
}

function fetchStudentFail(message) {
  return {
    type: ACTIONS.FETCH_STUDENTS_FAILURE,
    message
  };
}

export function fetchStudents() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  return dispatch => {
    dispatch(requestFetchStudents());
    return axios.get(`api/students`, config)
    .then(res => dispatch(fetchStudentsSuccess(res)))
    .catch(err => dispatch(fetchStudentFail(err)));
  };
}

/* instructors*/
function requestFetchInstructors() {
  return {
    type: ACTIONS.FETCH_INSTRUCTORS_REQUEST,
  };
}

function fetchInstructorsSuccess(data) {
  return {
    type: ACTIONS.FETCH_INSTRUCTORS_SUCCESS,
    data
  };
}

function fetchInstructorsFail(message) {
  return {
    type: ACTIONS.FETCH_INSTRUCTORS_FAILURE,
    message
  };
}

export function fetchInstructors() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  return dispatch => {
    dispatch(requestFetchInstructors());
    return axios.get(`api/instructors`, config)
    .then(res => dispatch(fetchInstructorsSuccess(res)))
    .catch(err => dispatch(fetchInstructorsFail(err)));
  };
}

export function updateVisibility(instructor, filter) {
  return {
    type: ACTIONS.UPDATE_VISIBILITY,
    instructor,
    filter
  };
}

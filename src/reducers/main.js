import * as ACTIONS from '../actions/constants';
import { filterVisibility, filterInstructor } from './visibility.js';

export default (state = { isFetching: true, students: [] }, action) => {
  switch (action.type) {
    case ACTIONS.ADD_STUDENT:
      return {...state, students: state.students.concat(action.payload)};
    case ACTIONS.UPDATE_STUDENT:
      return {...state, selectedStudent: action.payload};
    case ACTIONS.FETCH_STUDENTS_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS.FETCH_STUDENTS_SUCCESS:
      return {...state, isFetching: false, students: action.data.data, source: action.data.data}
    case ACTIONS.FETCH_STUDENTS_FAILURE:
      return {...state, isFetching: false, message: action.data.message}
    case ACTIONS.SELECT_STUDENT:
      return {...state, selectedStudent: action.payload}
    case ACTIONS.UPDATE_VISIBILITY:
      return {...state, students: filterVisibility(filterInstructor(state.source, action.instructor), action.filter)}
    default:
      return state;
  }
};

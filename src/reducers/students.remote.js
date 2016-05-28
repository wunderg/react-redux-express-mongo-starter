import * as ACTIONS from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_STUDENT:
      return {...state, students: state.students.concat(action.payload)};
    case ACTIONS.UPDATE_STUDENT:
      return {...state};
    case ACTIONS.FETCH_STUDENTS_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS.FETCH_STUDENTS_SUCCESS:
      return {...state, isFetching: false, students: action.data.data}
    case ACTIONS.FETCH_STUDENTS_FAILURE:
      return {...state, isFetching: false, message: action.data.message}
    default:
      return state;
  }
};

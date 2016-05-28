import * as ACTIONS from '../actions/constants';

export default (state = { isFetching: true, students: [] }, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DATA:
      return {...state, students: state.students.concat(action.payload)};
    case ACTIONS.UPDATE_DATA:
      return {...state, selectedStudent: action.payload};
    case ACTIONS.FETCH_DATA_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS.FETCH_DATA_SUCCESS:
      return {...state, isFetching: false, students: action.data.data, source: action.data.data}
    case ACTIONS.FETCH_DATA_FAILURE:
      return {...state, isFetching: false, message: action.data.message}
    default:
      return state;
  }
};

import * as ACTIONS from '../actions/constants';

export default (state = { isFetching: true, names: [] }, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_INSTRUCTORS_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS.FETCH_INSTRUCTORS_SUCCESS:
      return {...state, isFetching: false, instructors: action.data.data}
    case ACTIONS.FETCH_INSTRUCTORS_FAILURE:
      return {...state, isFetching: false, message: action.data.message}
    default:
      return state;
  }
};

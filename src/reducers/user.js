import * as ACTIONS from '../actions/constants.js';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, name: action.creds.email};
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, message: ''};
    case ACTIONS.LOGIN_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, message: action.message.data};
    case ACTIONS.SIGNUP_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false, name: action.creds.email};
    case ACTIONS.SIGNUP_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, message: ''};
    case ACTIONS.SIGNUP_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, message: action.message.data.error};
    case ACTIONS.TOKEN_LOGIN_REQUEST:
      return {...state, isFetching: true, isAuthenticated: false};
    case ACTIONS.TOKEN_LOGIN_SUCCESS:
      return {...state, isFetching: false, isAuthenticated: true, message: '', name: action.name.data.name};
    case ACTIONS.TOKEN_LOGIN_FAILURE:
      return {...state, isFetching: false, isAuthenticated: false, message: action.message.data};
    case ACTIONS.LOGOUT:
      return {...state, isFetching: false, isAuthenticated: false, name: null};
    default:
      return state;
  }
};

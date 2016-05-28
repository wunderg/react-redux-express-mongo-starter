import axios from 'axios';
import * as ACTIONS from './constants';

export function addData(input) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    name: input
  };

  axios.post(`api/data`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_DATA,
    payload: data
  };
}

export function selectData(data) {
  return {
    type: ACTIONS.SELECT_DATA,
    payload: data
  };
}

export function updateData(data) {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  axios.put(`api/data`, data, config);
  return {
    type: ACTIONS.UPDATE_DATA,
    payload: data
  };
}

function requestFetchData() {
  return {
    type: ACTIONS.FETCH_DATA_REQUEST,
  };
}

function fetchDataSuccess(data) {
  return {
    type: ACTIONS.FETCH_DATA_SUCCESS,
    data
  };
}

function fetchDataFail(message) {
  return {
    type: ACTIONS.FETCH_DATA_FAILURE,
    message
  };
}

export function fetchData() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  return dispatch => {
    dispatch(requestFetchData());
    return axios.get(`api/data`, config)
    .then(res => dispatch(fetchDataSuccess(res)))
    .catch(err => dispatch(fetchDataFail(err)));
  };
}


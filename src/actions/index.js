import axios from 'axios';
import * as ACTIONS from './constants';

export function addData(data) {
  const nextId = Math.floor(Math.random() * 100);
  const data = {
    _id: nextId,
    name: data
  };

  axios.post(`api/data`, data)
  .then(res => console.log(res))
  .then(err => console.log(err));
  return {
    type: ACTIONS.ADD_data,
    payload: data
  };
}

export function selectData(data) {
  return {
    type: ACTIONS.SELECT_data,
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
    type: ACTIONS.UPDATE_data,
    payload: data
  };
}

function requestFetchDatas() {
  return {
    type: ACTIONS.FETCH_DATA_REQUEST,
  };
}

function fetchdatasSuccess(data) {
  return {
    type: ACTIONS.FETCH_DATA_SUCCESS,
    data
  };
}

function fetchdataFail(message) {
  return {
    type: ACTIONS.FETCH_DATA_FAILURE,
    message
  };
}

export function fetchdatas() {
  const token = localStorage.getItem('id_token') || null;

  const config = {
    headers: { Authorization: token }
  };

  return dispatch => {
    dispatch(requestFetchdatas());
    return axios.get(`api/datas`, config)
    .then(res => dispatch(fetchdatasSuccess(res)))
    .catch(err => dispatch(fetchdataFail(err)));
  };
}


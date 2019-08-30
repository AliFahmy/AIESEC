import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from './types';

import axios from 'axios';

export const changeEmail = email => {
  return {
    type: CHANGE_EMAIL,
    email
  };
};

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    password
  };
};

export const login = user => {
  return dispatch => {
    dispatch(loginPending);
    axios
      .post('https://aiesec-asu-im-api.herokuapp.com/api/account/Token', user)
      .then(response => {
        dispatch(loginSuccess(response.data));
      })
      .catch(e => {
        dispatch(loginFailure(e));
      });
  };
};

const loginPending = () => {
  return {
    type: LOGIN_PENDING
  };
};

const loginSuccess = data => {
  console.log(data);

  return {
    type: LOGIN_SUCCESS,
    data
  };
};

const loginFailure = error => {
  console.log(error);

  return {
    type: LOGIN_FAILURE,
    error
  };
};

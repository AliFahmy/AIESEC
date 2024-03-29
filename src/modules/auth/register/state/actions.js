import { REGISTER_FAILURE, REGISTER_PENDING, REGISTER_SUCCESS } from './types';
import axios from 'axios';
export const register = userName => {
  return dispatch => {
    dispatch(registerPending());
    axios
      .post(
        'https://aiesec-asu-im-api.herokuapp.com/api/Account/PartialRegister',
        {
          email: userName
        }
      )
      .then(response => {
        dispatch(registerSuccess(response.data));
      })
      .catch(err => {
        dispatch(registerFailure(err));
      });
  };
};
export const registerPending = () => {
  return {
    type: REGISTER_PENDING
  };
};
export const registerSuccess = userName => {
  return {
    type: REGISTER_SUCCESS,
    userName
  };
};
export const registerFailure = err => {
  return {
    type: REGISTER_FAILURE,
    error: err
  };
};

import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } from './types';

const userSession = {
  token: '',
  expiresIn: 0,
  hasCompletedRegisteration: false,
  loadingLogin: false
};

const loginReducer = (state = userSession, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loadingLogin: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loadingLogin: false,
        token: action.token,
        expiresIn: action.expiresIn,
        hasCompletedRegisteration: action.hasCompletedRegisteration
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loadingLogin: false
      };

    default:
      return state;
  }
};

export const loginReducers = { loginReducer };

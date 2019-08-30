import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from './types';

const initialUserState = {
  email: '',
  password: ''
};

const userSession = {
  userId: 0,
  token: '',
  expiresIn: 0,
  loadingLogin: false
};

const onChangeReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
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
        userId: action.userId,
        token: action.token,
        expiresIn: action.expiresIn
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loadingLogin: false
      };

    default:
      return state;
  }
}

export const loginReducers = {loginReducer, onChangeReducer};

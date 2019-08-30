import {
  CHANGE_USERNAME,
  REGISTER_FAILURE,
  REGISTER_PENDING,
  REGISTER_SUCCESS
} from './types';
const registerInitalState = {
  userName: '',
  data: {},
  error: {},
  registerPending: false
};
const registerReducer = (state = registerInitalState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        userName: action.userName
      };
    case REGISTER_PENDING:
      return {
        ...state,
        registerPending: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: action.data,
        registerPending: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerPending: false,
        error: action.error
      };
    default:
      return state;
  }
};
export const registerReducers = { registerReducer };

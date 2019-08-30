import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    register: reducers['registerReducer'],
    login: reducers['loginReducer'],
    loginOnChange: reducers['onChangeReducer']
  });
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

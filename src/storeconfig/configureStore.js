import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    login: reducers['loginReducer']
  });
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

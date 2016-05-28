import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';
import main from '../reducers/main.js';
import user from '../reducers/user.js';

// import jwt from '../middlewares/token.js';

const logger = createLogger({
  collapsed: () => true,
});

export const rootReducer = combineReducers({
  form: formReducer,
  main,
  user
});

const createStoreWithMiddleware = applyMiddleware(
  // jwt,
  promise,
  thunkMiddleware,
   logger
)(createStore);

export default function storeConfig(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

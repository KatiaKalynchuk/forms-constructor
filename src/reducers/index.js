import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import formsReducer from './forms';
import editor from './editor';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  formsReducer,
  editor,
});

export default createRootReducer;

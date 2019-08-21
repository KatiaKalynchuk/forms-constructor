import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import formsReducer from './forms';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  formsReducer
});

export default createRootReducer;

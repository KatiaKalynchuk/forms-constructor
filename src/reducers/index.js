import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import formsReducer from './forms';
import editor from './editor';
import forms from './forms';
import formsInfo from './formsInfo';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  formsReducer,
  editor,
  forms,
  formsInfo,
});

export default createRootReducer;

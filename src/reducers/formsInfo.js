import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect'

const ReducerName = 'formsInfo';

export const addForm = createAction('ADD_FORM');

export default handleActions({
  [addForm]: (state, { payload: formId }) => {
    const count = Object.keys(state).length || '';
    console.log('formId',formId);

    return {
      ...state,
      [formId]: {
        name: `Form ${count}`,
        users: 5
      },
    };
  }
}, {});


const stateSelector = state => state[ReducerName];

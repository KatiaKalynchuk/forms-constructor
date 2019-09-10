import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect'

const ReducerName = 'forms';

export const addForm = createAction('ADD_FORM');

export default handleActions({
  [addForm]: (state, { payload: formId }) => ([
    ...state,
    formId,
  ])
}, []);


const stateSelector = state => state[ReducerName];

// export const fieldsSelectorFactory = id => createSelector(stateSelector, (state) => state[id] || []);
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect'

const ReducerName = 'editor';

export const addField = createAction('ADD_FIELD');

export default handleActions({
  [addField]: (state, { payload: { formId, field } }) => ({
    ...state,
    [formId]: state[formId] ? [...state[formId], field] : [field]
  })
}, { });


const stateSelector = state => state[ReducerName];

export const fieldsSelectorFactory = id => createSelector(stateSelector, (state) => state[id] || []);
export const fieldsNumberSelectorFactory = id => createSelector(stateSelector, (state) => console.log('id', id) || state[id].length || 0);
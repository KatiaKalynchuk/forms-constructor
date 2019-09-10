import { createSelector } from 'reselect'

const ReducerName = 'formsInfo';

const stateSelector = state => state[ReducerName];

export const idFormsInfoSelector = id => createSelector(stateSelector, forms => forms[id]);
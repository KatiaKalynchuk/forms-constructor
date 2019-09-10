import { createSelector } from 'reselect'

const ReducerName = 'forms';


const stateSelector = state => state[ReducerName];

export const formsSelector = createSelector(stateSelector, form  => form);
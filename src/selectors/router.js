import { createSelector } from 'reselect'

const ReducerName = 'router';


const stateSelector = state => state[ReducerName];

export const idRoutSelector = createSelector(stateSelector, ({ location })  => {
  const pathname = location.pathname.split('/');
  return pathname[pathname.length-1]
});
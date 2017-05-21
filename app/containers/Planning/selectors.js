import { createSelector } from 'reselect';

/**
 * Direct selector to the planning state domain
 */
const selectPlanningDomain = () => (state) => state.get('planning');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Planning
 */

const makeSelectPlanning = () => createSelector(
  selectPlanningDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPlanning;
export {
  selectPlanningDomain,
};

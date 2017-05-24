import { createSelector } from 'reselect';

/**
 * Direct selector to the mainteinance state domain
 */
const selectMainteinanceDomain = () => (state) => state.get('mainteinance');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Mainteinance
 */

const makeSelectMainteinance = () => createSelector(
  selectMainteinanceDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMainteinance;
export {
  selectMainteinanceDomain,
};

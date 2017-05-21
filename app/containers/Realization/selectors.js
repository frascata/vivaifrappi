import { createSelector } from 'reselect';

/**
 * Direct selector to the realization state domain
 */
const selectRealizationDomain = () => (state) => state.get('realization');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Realization
 */

const makeSelectRealization = () => createSelector(
  selectRealizationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRealization;
export {
  selectRealizationDomain,
};

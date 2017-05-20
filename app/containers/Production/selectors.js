import { createSelector } from 'reselect';

/**
 * Direct selector to the production state domain
 */
const selectProductionDomain = () => (state) => state.get('production');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Production
 */

const makeSelectProduction = () => createSelector(
  selectProductionDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProduction;
export {
  selectProductionDomain,
};

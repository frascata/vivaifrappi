import { createSelector } from 'reselect';

/**
 * Direct selector to the nurseryPlant state domain
 */
const selectNurseryPlantDomain = () => (state) => state.get('nurseryPlant');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NurseryPlant
 */

const makeSelectNurseryPlant = () => createSelector(
  selectNurseryPlantDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNurseryPlant;
export {
  selectNurseryPlantDomain,
};

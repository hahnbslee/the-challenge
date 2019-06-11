/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */
import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(entries) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    entries
  };
}
// data holds firstName, lastName, luckyNumber
export function getNumberSuccess(data) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    data
  };
}
export const getNumberFailure = (err) => ({
  type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_FAILURE,
  payload: err,
  error: true,
});

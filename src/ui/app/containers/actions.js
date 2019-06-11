/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */
import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(userName) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    userName
  };
}
export function getNumberSuccess(luckyNumber) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    luckyNumber
  };
}
export const getNumberFailure = (err) => ({
  type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_FAILURE,
  payload: err,
  error: true,
});

// TODO: Add more actions if needed
// ???
// export function submitForm(props) {
//   return {
//     type: DISPATCH_ACTIONS.SUBMIT_FORM,
//     payload: props
//   };
// }

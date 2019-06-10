/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */
import history from './history';
import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  history.push('/lucky');
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// TODO: Add more actions if needed
// ???
// export function submitForm(props) {
//   return {
//     type: DISPATCH_ACTIONS.SUBMIT_FORM,
//     payload: props
//   };
// }
